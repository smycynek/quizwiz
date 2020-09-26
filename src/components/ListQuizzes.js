/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import quizFreakClient from '../api/quizFreakClient';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const QuizList = ({ data }) => data.map((datum) => (
  <li key={datum[1]}>
    <Link to={`/take/${datum[1]}`}>{datum[0]}</Link>
  </li>
));

const ListQuizzes = () => {
  const client = quizFreakClient();

  const [quizList, setQuizList] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchQuizzes() {
    setWaiting(true);
    setError(false);
    client.getQuizzes()
      .then((res) => {
        const { data } = res;

        const quizNames = [];
        data.forEach((element) => {
          if (element.locked) {
            quizNames.push([element.name, element.id]);
          }
        });

        setQuizList(quizNames);
        setWaiting(false);
        setError(false);
      },
      (err) => {
        setWaiting(false);
        setError(true);
        setQuizList(null);
        console.log(err);
      });
  }

  useEffect(fetchQuizzes, []);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />

      {waiting && <div>Loading quiz list (Using free tier hosting, please wait 30 seconds)...</div>}
      {error && <div>Error listing quizzes...</div>}
      {quizList && (
      <>
        <ul style={{ listStyleType: 'none' }}>
          <QuizList key={1} data={quizList} />
        </ul>
      </>
      )}
      <div>
        <Link to="/">Home...</Link>
      </div>
    </>
  );
};

export default ListQuizzes;
