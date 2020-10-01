/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

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

const mapDispatchToProps = (dispatch) => (
  {
    addResultWorkflow: (name, description, index, quizId) => {
      dispatch(Creators.addResult(name, description, index, quizId));
    },
    addQuestionWorkflow: (text, choices, quizId) => {
      dispatch(Creators.addQuestion(text, choices, quizId));
    },
    setOneQuestionDone: () => dispatch(Creators.setOneQuestionDone()),
    setDoneWorkflow: (quizId, makeListable) => dispatch(Creators.setDone(quizId, makeListable)),
    createQuizWorkflow: (name) => dispatch(Creators.createQuiz(name)),
    reset: () => dispatch(Creators.reset()),
  });

const CreateMain = connect(mapStateToProps, mapDispatchToProps)(CreateFormMain);

export default CreateMain;
