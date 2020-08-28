/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationShell from './LocationShell';
import ListQuizzes from './ListQuizzes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <h1 className="text-primary">Quizzes</h1>
            <ListQuizzes />
          </>
        </Route>

        <Route path="/:id">
          <LocationShell />
          <>
            <a href="/">Try another quiz...</a>
          </>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
