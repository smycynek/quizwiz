/* eslint-disable arrow-body-style */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createReducer, resettableReducer } from 'reduxsauce';
import { Types, INITIAL_STATE } from './types';

const resettable = resettableReducer('RESET');

export const createQuizSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    name: action.name,
    quizId: action.quizId,
  };
};

export const addResultSuccess = (state = INITIAL_STATE, action) => {
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

export const addResultsBulkSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    results: action.results,
  };
};

export const addQuestionSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    questions: [
      ...state.questions,
      {
        text: action.text,
        choices: action.choices,
      },
    ],
  };
};

// eslint-disable-next-line no-unused-vars
export const setDoneSuccess = (state = INITIAL_STATE, action) => {
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
  [Types.CREATE_QUIZ_SUCCESS]: createQuizSuccess,
  [Types.ADD_RESULT_SUCCESS]: addResultSuccess,
  [Types.ADD_QUESTION_SUCCESS]: addQuestionSuccess,
  [Types.SET_DONE_SUCCESS]: setDoneSuccess,
  [Types.SET_ONE_QUESTION_DONE]: oneQuestionDone,
  [Types.ADD_RESULTS_BULK_SUCCESS]: addResultsBulkSuccess,
};

const mainReducer = createReducer(INITIAL_STATE, HANDLERS);

const reducer = combineReducers({
  form: formReducer,
  mainReducer: resettable(mainReducer),
});

export default reducer;
