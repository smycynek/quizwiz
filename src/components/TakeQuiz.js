/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CasualQuiz from 'react-casual-quiz/lib';
import { Link } from 'react-router-dom';
import quizFreakClient from '../api/quizFreakClient';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const TakeQuiz = ({ match }) => {
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

TakeQuiz.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TakeQuiz;
