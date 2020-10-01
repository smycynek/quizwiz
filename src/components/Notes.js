/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Notes = () => (
  <>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />

  <div className="App">
    <h1 className="text-primary">Work in Progress</h1>
    <h2 className="text-secondary">Known bugs/limitations...</h2>
    <ol>
      <li>
        The back-end is hosted on free-tier service.  It needs wake up if not in
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
        Error handling workflow could be improved.
      </li>
      <li>
        No support for uploading photos for each personality.
      </li>
      <li>
        Plenty of other things -- I work on this a little bit at a time :).
      </li>
    </ol>
    <hr />
    <div>
      <Link to="/">Home...</Link>
    </div>
  </div>
  </>
);
export default Notes;
