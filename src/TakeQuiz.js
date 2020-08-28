/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CasualQuiz from 'react-casual-quiz/lib';

// eslint-disable-next-line react/prop-types
const TakeQuiz = ({ id }) => {
  const baseUrl = process.env.REACT_APP_API_ENDPOINT;
  const endpoint = `${baseUrl}/quizzes/${id}`;
  console.log(endpoint);
  const [quizData, setQuizData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchQuiz() {
    setWaiting(true);
    setError(false);
    axios
      .get(endpoint, {
        mode: 'no-cors',
      })
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

  useEffect(fetchQuiz, []);

  return (
    <>
      {waiting && <div>Loading quiz...</div>}
      {error && <div>Quiz not found or error loading...</div>}
      {quizData && (
      <CasualQuiz
        name={quizData.name}
        results={quizData.results}
        questions={quizData.questions}
      />
      )}
    </>
  );
};

export default TakeQuiz;
