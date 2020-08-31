/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import TakeQuiz from './TakeQuiz';
import Create from './Create';

import ListQuizzes from './ListQuizzes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import CreateQuiz from './CreateQuiz';
import CreateResults from './CreateResults';
import CreateQuestion from './CreateQuestion';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/quizwiz">
      <Switch>
        <Route exact path="/">
          <>
            <Home />
          </>
        </Route>
        <Route exact path="/list">
          <>
            <h1 className="text-primary">Quizzes</h1>
            <ListQuizzes />
          </>
        </Route>

        <Route exact path="/create">
          <>
            <Create />
          </>
        </Route>

        <Route
          path="/take/:id"
          render={(props) => (<TakeQuiz {...props} />)}
        />

        <Route exact path="/cq">
          <>
            <CreateQuiz />
          </>
        </Route>

        <Route exact path="/cr">
          <>
            <CreateResults />
          </>
        </Route>

        <Route exact path="/cqu">
          <>
            <CreateQuestion />
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
