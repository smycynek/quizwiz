/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';

import CasualQuiz from 'react-casual-quiz/lib';
import { Link } from 'react-router-dom';
import quizFreakClient from '../api/quizFreakClient';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const TakeRandomQuiz = () => {
  const client = quizFreakClient();
  const [quizData, setQuizData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchRandomQuiz() {
    setWaiting(true);
    setError(false);
    client.getQuizzes()
      .then((res) => {
        const { data } = res;
        const quizCount = data.length;
        const index = Math.floor(Math.random() * quizCount);

        setQuizData(data[index]);
        setWaiting(false);
      },
      (err) => {
        setWaiting(false);
        setError(true);
        setQuizData(null);
        console.log(err);
      });
  }

  useEffect(fetchRandomQuiz, []);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
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
    </>
  );
};

export default TakeRandomQuiz;
