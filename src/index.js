/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import TakeQuiz from './components/TakeQuiz';
import CreateMain from './containers/CreateMain';

import ListQuizzes from './components/ListQuizzes';
import reducer from './redux/reducers';
import { INITIAL_STATE } from './redux/types';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import Home from './components/Home';

import CreateQuiz from './containers/CreateQuiz';
import CreateResults from './components/CreateResultsForm';
import CreateQuestion from './components/CreateQuestionForm';
import Notes from './components/Notes';

import { rootSaga } from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),

  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/quizwiz">
        <Switch>
          <Route exact path="/">
            <>
              <Home />
            </>
          </Route>
          <Route exact path="/list">
            <>
              <ListQuizzes />
            </>
          </Route>

          <Route exact path="/create">
            <>
              <CreateMain />
            </>
          </Route>

          <Route exact path="/notes">
            <>
              <Notes />
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
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
