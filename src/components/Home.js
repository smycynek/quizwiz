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
      <p>Create a quiz, take a quiz, share a quiz...</p>
      <div>
        <Link to="/create">Create a quiz...</Link>
      </div>
      <div>
        <Link to="/list">See existing quizzes...</Link>
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
      <h4 className="text-secondary">Work in Progress - Known bugs/limitations...</h4>
      <ol>
        <li>
          The back-end is hosted on free tier service.  It needs wake up if not in
          use for a while. Go to
          {' '}
          <Link to="/list">See existing quizzes...</Link>
          {' '}
          and wait a few seconds to activate it if you have problems.
        </li>
        <li>
          Refreshing the browser resets your session.
        </li>
        <li>
          No support to continue authoring a quiz later.
        </li>
        <li>
          No real error notification or handling.
        </li>
        <li>
          No support for uploading photos for each personality.
        </li>
        <li>
          Plenty of other things -- I work on this a little bit at a time :).
        </li>
      </ol>
      <hr />
      <small><a href="https://github.com/smycynek/quizwiz">https://github.com/smycynek/quizwiz</a></small>
    </div>
  );
};
export default Home;
