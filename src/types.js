import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  createQuiz: ['name', 'quizId'],
  addResult: ['name', 'description', 'index'],
  addQuestion: ['text', 'choices'],
  publishQuiz: [],
}, {});

export const INITIAL_STATE = {
  name: null,
  done: false,
  oneQuestion: false,
  results: [],
  questions: [],
};

export { Types, Creators };
