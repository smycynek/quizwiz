/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CasualQuiz from 'react-casual-quiz/lib';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

    const success = (res) => {
      const { data } = res;
      setQuizData(data);
      setWaiting(false);
    };

    const failure = (err) => {
      setWaiting(false);
      setError(true);
      setQuizData(null);
      console.log(err);
    };

    if (quizId) {
      client.getQuiz(quizId)
        .then(success, failure);
    } else {
      client.getRandomQuiz()
        .then(success, failure);
    }
  }

  useEffect(() => fetchQuiz(id), []);

  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <title>{quizData ? `Quiz Wiz: ${quizData.name}` : 'Quiz Wiz'}</title>
        </Helmet>

        {waiting && <div>Loading quiz...</div>}
        {error && <div>Quiz not found or error loading...</div>}
        {quizData && !error && (
        <CasualQuiz
          name={quizData.name}
          results={quizData.results}
          questions={quizData.questions}
        />
        )}

        <div>
          <Link to="/">Home...</Link>
        </div>
      </div>
    </>
  );
};

TakeQuiz.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TakeQuiz;
