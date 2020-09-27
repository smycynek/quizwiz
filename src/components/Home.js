/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import quizFreakClient from '../api/quizFreakClient';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const client = quizFreakClient();
  function preWarm() {
    client.getQuizzes()
      .then((res) => {
        const { data } = res;
        const quizNames = [];
        data.forEach((element) => {
          if (element.locked) {
            quizNames.push([element.name, element.id]);
          }
        });
      },
      (err) => {
        console.log(err);
      });
  }

  useEffect(preWarm, []); // need to improve
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      <h1 className="text-primary">Quiz Wiz</h1>
      <p>Create a fun personality quiz, take one, share one...</p>
      <div>
        <Link to="/create">Create a quiz...</Link>
      </div>
      <div>
        <Link to="/list">See existing quizzes...</Link>
      </div>
      <div style={{ paddingTop: '50px' }}>
        <Link to="/notes">Known bugs and limitations...</Link>
      </div>
      {false
&& (
<div>
  <div>
    <Link to="/cq">(DEBUG)-quiz</Link>
  </div>
  <div>
    <Link to="/cr">(DEBUG)-result</Link>
  </div>
  <div>
    <Link to="/cqu">(DEBUG)-question</Link>
  </div>
</div>
)}

      <hr />
      <small><a href="https://github.com/smycynek/quizwiz">https://github.com/smycynek/quizwiz</a></small>
    </div>
  );
};
export default Home;
