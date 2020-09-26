/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */

import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { Creators, Types } from './types';
import quizFreakClient from '../api/quizFreakClient';

const client = quizFreakClient();

function* createQuizSaga(action) {
  try {
    const result = yield call(client.createQuiz, action.name);
    const qs = Creators.createQuizSuccess(action.name, result.data.id);
    yield put(qs);
  } catch (e) {
    console.log('ERROR');
  }
}

function* createResultSaga(action) {
  try {
    yield call(
      client.createResult,
      action.name,
      action.description,
      action.index,
      action.quizId,
    );
    yield put(
      Creators.addResultSuccess(action.name, action.description, action.index),
    );
  } catch (e) {
    console.log('ERROR');
  }
}

function* createQuestionSaga(action) {
  try {
    yield call(
      client.createQuestion,
      action.text,
      action.choices,
      action.quizId,
    );
    yield put(Creators.addQuestionSuccess(action.text, action.choices));
  } catch (e) {
    console.log('ERROR');
  }
}

function* setDoneSaga(action) {
  try {
    yield call(
      client.publishQuiz,
      action.quizId,
    );
    yield put(Creators.setDoneSuccess());
  } catch (e) {
    console.log('ERROR');
  }
}

export function* rootSaga() {
  yield takeLatest(Types.CREATE_QUIZ, createQuizSaga);
  yield takeEvery(Types.ADD_RESULT, createResultSaga);
  yield takeEvery(Types.ADD_QUESTION, createQuestionSaga);
  yield takeEvery(Types.SET_DONE, setDoneSaga);
}
