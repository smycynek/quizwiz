/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
        if (data) {
          data.forEach((element) => {
            quizNames.push([element.name, element.id]);
          });
        }
      },
      (err) => {
        console.log(err);
      });
  }

  useEffect(preWarm, []); // need to improve
  return (
    <>
      <Helmet>
        <title>Quiz Wiz</title>
      </Helmet>
      <div className="container">
        <div className="App">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
          <h1 className="text-primary">Quiz Wiz</h1>
          <p>Make, take, and share fun personality quizzes.</p>
          <div>

            <Link style={{ color: '#fff' }} to="/create">
              <h4 className="BannerLink">Create a Quiz</h4>
            </Link>
          </div>
          <div>
            <Link style={{ color: '#fff' }} to="/list">
              <h4 className="BannerLink">Browse Quizzes</h4>
            </Link>

            <Link style={{ color: '#fff' }} to="/random">
              <h4 className="BannerLink">Random Quiz</h4>
            </Link>

          </div>
          <hr />
          <div>
            <small><a href="https://github.com/smycynek/quizwiz">https://github.com/smycynek/quizwiz</a></small>
          </div>
          <div>
            <small><a href="https://stevenvictor.net">Home...</a></small>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
