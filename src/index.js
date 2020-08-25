/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CasualQuiz from 'react-casual-quiz/lib';
import axios from 'axios';
import {
  useLocation,
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';

const App = ({ id }) => {
  const baseUrl = 'https://whispering-ocean-54006.herokuapp.com/quizzes/';

  const endpoint = baseUrl + id;
  const [quizData, setQuizData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  function fetchQuiz() {
    setWaiting(true);
    setError(false);
    axios
      .get(endpoint, {
        mode: 'no-cors',
      })
      .then((res) => {
        const { data } = res;
        setQuizData(data);
        setWaiting(false);
      },
      (err) => {
        setWaiting(false);
        setError(true);
        console.log(err);
      });
  }

  useEffect(fetchQuiz, []);

  return (
    <>
      {quizData && (
      <Router>
        <Route path="/">
          <>
            <CasualQuiz
              name={quizData.name}
              results={quizData.results}
              questions={quizData.questions}
            />
          </>
        </Route>
      </Router>
      )}
    </>
  );
};

const LocationShell = () => {
  const location = useLocation();
  console.log('THE LOC');
  console.log(location.search);
  return (<App id={location.search.split('=')[1]} />);
};

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Route path="/">
        <LocationShell />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
