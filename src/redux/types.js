import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  createQuizSuccess: ['name', 'quizId'],
  addResult: ['name', 'description', 'index'],
  addQuestion: ['text', 'choices'],
  setDone: [],
  setOneQuestionDone: [],
}, {});

export const INITIAL_STATE = {
  name: null,
  done: false,
  oneQuestionDone: false,
  results: [],
  questions: [],
};

export { Types, Creators };
