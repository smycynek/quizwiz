/* eslint-disable camelcase */
import { create } from 'apisauce';

const quizFreakClient = () => {
  const api = create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
  });

  return {
    getQuiz: (id) => api.get(`/quizzes/${id}`),
    getQuizzes: () => api.get('/quizzes'),
    createQuiz: (name) => api.post('/quizzes', { name }),
    createResult: (name, description, quiz_id) => api.post('/results', { name, description, quiz_id }),
    createQuestion: (text, choices, quiz_id) => api.post('/questions', { text, choices, quiz_id }),
    publishQuiz: (quiz_id) => api.post(`/quizzes/${quiz_id}/lock`),
  };
};

export default quizFreakClient;
