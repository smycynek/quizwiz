/* eslint-disable camelcase */
import { create } from 'apisauce';

const quizFreakClient = () => {
  const api = create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
  });

  return {
    getRandomQuiz: () => api.get('/quizzes/random'),
    getQuiz: (id) => api.get(`/quizzes/${id}`),
    getQuizzes: () => api.get('/quizzes'),
    createQuiz: (name) => api.post('/quizzes', { name }),
    createResult: (name, description, index, quiz_id) => api.post('/results', {
      name, description, index, quiz_id,
    }),
    createResultsBulk: (results) => api.post('/results/bulk', results),
    createQuestion: (text, choices, quiz_id) => api.post('/questions', { text, choices, quiz_id }),
    publishQuiz: (quiz_id, makeListable) => api.post(`/quizzes/${quiz_id}/lock?public=${makeListable}`),
  };
};

export default quizFreakClient;
