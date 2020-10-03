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
          quizNames.push([element.name, element.id]);
        });
      },
      (err) => {
        console.log(err);
      });
  }

  useEffect(preWarm, []); // need to improve
  return (
    <div class="container">
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      <h1 className="text-primary">Quiz Wiz</h1>
      <p>Make, take, and share fun personality quizzes.</p>
      <div>
        <h4 className="BannerLink">
          <Link style={{ color: '#fff' }} to="/create">
            Create a quiz
          </Link>
        </h4>
      </div>
      <div>
        <h4 className="BannerLink">
          <Link style={{ color: '#fff' }} to="/list">
            Browse quizzes
          </Link>
        </h4>
        <h4 className="BannerLink">
          <Link style={{ color: '#fff' }} to="/random">
            Random quiz
          </Link>
        </h4>
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
    </div>
  );
};
export default Home;
