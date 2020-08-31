/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// eslint-disable-next-line react/prop-types
const Home = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
    <h1 className="text-primary">Quiz Wiz</h1>
    <p>Create a quiz, take a quiz, share a quiz...</p>
    <div>
      <Link to="/create">Create a quiz...</Link>
    </div>
    <div>
      <Link to="/list">See existing quizzes...</Link>
    </div>

    <div>
      <Link to="/cq">Quiz</Link>
    </div>
    <div>
      <Link to="/cr">Result</Link>
    </div>
    <div>
      <Link to="/cqu">Question</Link>
    </div>

  </>
);

export default Home;
