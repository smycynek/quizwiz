/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import quizFreakClient from '../api/quizFreakClient';

import { Creators } from './types';

const client = quizFreakClient();

export const createQuizThunk = (name) => {
  return (dispatch) => {
    client.createQuiz(name)
      .then((res) => {
        const { data } = res;
        dispatch(Creators.createQuizSuccess(name, data.id));
      },
      (err) => {
        console.log(err);
      });
  };
};

/*
export const addResultThunk = (name, description, index, quizId) => {
  return (dispatch) => {
    client.createResult(name, description, index, quizId)
      .then((res) => {
        console.log(res);
        dispatch(Creators.addResultSuccess(name, description, index));
      },
      (err) => {
        console.log(err);
      });
  };
};
*/

