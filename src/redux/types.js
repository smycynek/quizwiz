import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  createQuiz: ['name'],
  createQuizSuccess: ['name', 'quizId'],
  addResult: ['name', 'description', 'index', 'quizId'],
  addResultSuccess: ['name', 'description', 'index'],
  addQuestion: ['text', 'choices', 'quizId'],
  addQuestionSuccess: ['text', 'choices'],
  setDone: ['quizId'],
  setDoneSuccess: [],
  setOneQuestionDone: [],
}, {});

export const INITIAL_STATE = {
  quizId: null,
  name: null,
  done: false,
  oneQuestionDone: false,
  results: [],
  questions: [],
};

export { Types, Creators };
