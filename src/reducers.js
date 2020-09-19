/* eslint-disable arrow-body-style */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createReducer } from 'reduxsauce';
import { Types, INITIAL_STATE } from './types';

export const createQuiz = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    name: action.name,
    quizId: action.quizId,
  };
};

export const addResult = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    results: [
      ...state.results,
      {
        name: action.name,
        description: action.description,
        index: action.index,
      },
    ],
  };
};

export const addQuestion = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    questions: [
      ...state.questions,
      {
        name: action.text,
        choices: action.choices,
      },
    ],
  };
};

// eslint-disable-next-line no-unused-vars
export const setDone = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    done: true,
  };
};

// eslint-disable-next-line no-unused-vars
export const oneQuestionDone = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    oneQuestionDone: true,
  };
};

// map our action types to our reducer functions
export const HANDLERS = {
  [Types.CREATE_QUIZ]: createQuiz,
  [Types.ADD_RESULT]: addResult,
  [Types.ADD_QUESTION]: addQuestion,
  [Types.SET_DONE]: setDone,
  [Types.SET_ONE_QUESTION_DONE]: oneQuestionDone,
};

const mainReducer = createReducer(INITIAL_STATE, HANDLERS);

const reducer = combineReducers({
  form: formReducer,
  mainReducer,
});

export default reducer;
