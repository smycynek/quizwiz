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
      <Link to="/cq">(DEBUG)-quiz</Link>
    </div>
    <div>
      <Link to="/cr">(DEBUG)-result</Link>
    </div>
    <div>
      <Link to="/cqu">(DEBUG)-question</Link>
    </div>
    <hr />
    <h3 className="text-secondary">Known bugs/limitations...</h3>
    <ol>
      <li>
        Some issue with ordering personality type results
      </li>
      <li>
        Refreshing the browser breaks the session.
      </li>
      <li>
        Copy/pasting links does not work -- use the main menu to navigate.
      </li>
      <li>
        Still need redux/saga framework to properly manage back-end.
      </li>
      <li>
        No support to continue authoring a quiz later.
      </li>
      <li>
        No support for uploading photos for each personality.
      </li>
      <li>
        Overall CSS styling could be a little nicer and more consistent.
      </li>
      <li>
        Plenty of other things -- I work on this a little bit at a time :).
      </li>
    </ol>
  </>
);

export default Home;
