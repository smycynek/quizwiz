/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

import { Creators } from '../redux/types';

import CreateFormMain from '../components/CreateFormMain';

const mapStateToProps = (state) => ({
  formValuesFromCreateQuiz: getFormValues('CreateQuiz')(state),
  formValuesFromCreateResults: getFormValues('CreateResults')(state),
  formValuesFromCreateQuestion: getFormValues('CreateQuestion')(state),
  quizId: state.mainReducer ? state.mainReducer.quizId : null,
  quizTitle: state.mainReducer ? state.mainReducer.name : null,
  results: state.mainReducer ? state.mainReducer.results : null,
  questions: state.mainReducer ? state.mainReducer.questions : null,
  done: state.mainReducer ? state.mainReducer.done : false,
  oneQuestionDone: state.mainReducer ? state.mainReducer.oneQuestionDone : false,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => (
  {
    createQuizP: (name, id) => dispatch(Creators.createQuiz(name, id)),
    addResultP: (name, description, index) => {
      dispatch(Creators.addResult(name, description, index));
    },
    addQuestionP: (text, choices) => dispatch(Creators.addQuestion(text, choices)),
    setOneQuestionP: () => dispatch(Creators.setOneQuestionDone()),
    setDoneP: () => dispatch(Creators.setDone()),
  });

const CreateMain = connect(mapStateToProps, mapDispatchToProps)(CreateFormMain);

export default CreateMain;
