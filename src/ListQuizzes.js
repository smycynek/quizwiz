/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const QuizList = ({ data }) => data.map((datum) => (
  <li>
    <a href={`/quizwiz/?id=${datum[1]}`}>{datum[0]}</a>
  </li>
));

// eslint-disable-next-line react/prop-types
const ListQuizzes = () => {
  const baseUrl = process.env.REACT_APP_API_ENDPOINT;
  console.log(baseUrl);

  const [quizList, setQuizList] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchQuizzes() {
    setWaiting(true);
    setError(false);
    axios
      .get(`${baseUrl}/quizzes`, {
        mode: 'no-cors',
      })
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
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />

      {waiting && <div>Loading quiz list...</div>}
      {error && <div>Error listing quizzes...</div>}
      {quizList && (
      <>
        <ul style={{ listStyleType: 'none' }}>
          <QuizList data={quizList} />
        </ul>
      </>
      )}
    </>
  );
};

export default ListQuizzes;
