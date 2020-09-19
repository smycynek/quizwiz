/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import CasualQuiz from 'react-casual-quiz/lib';
import { Link } from 'react-router-dom';
import quizFreakClient from '../api/quizFreakClient';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

// eslint-disable-next-line react/prop-types
const TakeQuiz = ({ match }) => {
  // eslint-disable-next-line react/prop-types
  const { params: { id } } = match;
  const client = quizFreakClient();
  const [quizData, setQuizData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchQuiz(quizId) {
    setWaiting(true);
    setError(false);
    client.getQuiz(quizId)
      .then((res) => {
        const { data } = res;
        setQuizData(data);
        setWaiting(false);
      },
      (err) => {
        setWaiting(false);
        setError(true);
        setQuizData(null);
        console.log(err);
      });
  }

  useEffect(() => fetchQuiz(id), []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      {waiting && <div>Loading quiz...</div>}
      {error && <div>Quiz not found or error loading...</div>}
      {quizData && (
      <CasualQuiz
        name={quizData.name}
        results={quizData.results}
        questions={quizData.questions}
      />
      )}

      <div>
        <Link to="/">Home...</Link>
      </div>
    </>
  );
};

export default TakeQuiz;
