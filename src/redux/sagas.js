/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */

import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { Creators, Types } from './types';
import quizFreakClient from '../api/quizFreakClient';
import { notifySuccess, notifyFailure } from '../notify';

const client = quizFreakClient();

function* createQuizSaga(action) {
  try {
    const result = yield call(client.createQuiz, action.name);
    if (!result.ok) {
      throw new Error(result.problem);
    }
    const qs = Creators.createQuizSuccess(action.name, result.data.id);
    yield put(qs);
    yield notifySuccess('New quiz started...');
  } catch (e) {
    console.log(e);
    yield notifyFailure(`Error creating new quiz... ${e.message}`);
  }
}

function* createResultSaga(action) {
  try {
    const result = yield call(
      client.createResult,
      action.name,
      action.description,
      action.index,
      action.quizId,
    );
    if (!result.ok) {
      throw new Error(result.problem);
    }
    yield put(
      Creators.addResultSuccess(action.name, action.description, action.index),
    );
    yield notifySuccess(`New persona ${action.index + 1} added ...`);
  } catch (e) {
    console.log(e);
    yield notifyFailure(`Error adding new persona... ${e.message}`);
  }
}

function* createQuestionSaga(action) {
  try {
    const result = yield call(
      client.createQuestion,
      action.text,
      action.choices,
      action.quizId,
    );
    if (!result.ok) {
      throw new Error(result.problem);
    }
    yield put(Creators.addQuestionSuccess(action.text, action.choices));
    yield notifySuccess('New question added ...');
  } catch (e) {
    console.log(e);
    yield notifyFailure(`Error adding new question... ${e.message}`);
  }
}

function* setDoneSaga(action) {
  try {
    const result = yield call(
      client.publishQuiz,
      action.quizId,
      action.makeListable,
    );
    if (!result.ok) {
      throw new Error(result.problem);
    }
    yield put(Creators.setDoneSuccess());
    yield notifySuccess('Quiz published ...');
  } catch (e) {
    console.log(e);
    yield notifyFailure(`Error publishing quiez... ${e.message}`);
  }
}

export function* rootSaga() {
  yield takeLatest(Types.CREATE_QUIZ, createQuizSaga);
  yield takeEvery(Types.ADD_RESULT, createResultSaga);
  yield takeEvery(Types.ADD_QUESTION, createQuestionSaga);
  yield takeEvery(Types.SET_DONE, setDoneSaga);
}
