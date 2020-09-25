/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import quizFreakClient from '../api/quizFreakClient';

import { Creators } from './types';

const client = quizFreakClient();

function* createQuizSaga(action) {
  try {
    const result = yield call(client.createQuiz, action.name);
    yield put({
      type: 'CREATE_QUIZ_SUCCESS',
      name: action.name,
      quizId: result.data.id,
    });
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
    yield put({
      type: 'ADD_RESULT_SUCCESS',
      name: action.name,
      description: action.description,
      index: action.index,
    });
  } catch (e) {
    console.log('ERROR');
  }
}

export function* rootSaga() {
  yield takeLatest('CREATE_QUIZ', createQuizSaga);
  yield takeEvery('ADD_RESULT', createResultSaga);
}
