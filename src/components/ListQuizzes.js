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
  <li style={{ margin: '1px', padding: '2px' }} key={datum[1]}>
    <Link className="ContentLink" to={`/take/${datum[1]}`}>{datum[0]}</Link>
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
          quizNames.push([element.name, element.id]);
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
    <div className="App">
      <h1 className="text-primary">All Quizzes</h1>
      {waiting && <div>Loading quiz list (Using free tier hosting, please wait 30 seconds)...</div>}
      {error && <div>Error listing quizzes...</div>}
      {quizList && (
      <>
        <ul style={{ listStyleType: 'none', padding: '2px' }}>
          <QuizList key={1} data={quizList} />
        </ul>
      </>
      )}
      <div>
        <Link to="/">Home...</Link>
      </div>
    </div>
  );
};

export default ListQuizzes;
