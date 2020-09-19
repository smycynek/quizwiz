/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import quizFreakClient from '../api/quizFreakClient';
import CreateQuiz from './CreateQuiz';
import CreateResults from './CreateResults';
import CreateQuestion from './CreateQuestion';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

import { Creators } from '../redux/types';

// eslint-disable-next-line react/prop-types
const CreateCore = ({
  formValuesFromCreateQuiz,
  formValuesFromCreateResults, formValuesFromCreateQuestion,
  createQuizP, addResultP, addQuestionP, quizId, quizTitle, results, questions,
  done, oneQuestionDone, setDoneP, setOneQuestionP,
}) => {
  const client = quizFreakClient();

  const storeQuiz = (name) => {
    client.createQuiz(name)
      .then((res) => {
        const { data } = res;
        createQuizP(name, data.id);
      },
      (err) => {
        console.log(err);
      });
  };

  const storeResult = (name, description, index) => {
    client.createResult(name, description, index, quizId)
      .then((res) => {
        const { data } = res;
      },
      (err) => {
        console.log(err);
      });
  };

  const storeQuestion = (questionText, a, b, c, d) => {
    client.createQuestion(questionText,
      [a, b, c, d],
      quizId)
      .then((res) => {
        const { data } = res;
      },
      (err) => {
        console.log(err);
      });
  };

  const handleSubmitTitle = () => {
    storeQuiz(formValuesFromCreateQuiz.quizTitle);
  };

  const handleSubmitResults = () => {
    addResultP(formValuesFromCreateResults.personalityA,
      formValuesFromCreateResults.personalityADescription,
      0);

    addResultP(formValuesFromCreateResults.personalityB,
      formValuesFromCreateResults.personalityBDescription,
      1);

    addResultP(formValuesFromCreateResults.personalityC,
      formValuesFromCreateResults.personalityCDescription,
      2);

    addResultP(formValuesFromCreateResults.personalityD,
      formValuesFromCreateResults.personalityDDescription,
      3);

    storeResult(formValuesFromCreateResults.personalityA,
      formValuesFromCreateResults.personalityADescription, 0);
    storeResult(formValuesFromCreateResults.personalityB,
      formValuesFromCreateResults.personalityBDescription, 1);
    storeResult(formValuesFromCreateResults.personalityC,
      formValuesFromCreateResults.personalityCDescription, 2);
    storeResult(formValuesFromCreateResults.personalityD,
      formValuesFromCreateResults.personalityDDescription, 3);
  };

  const handleSubmitQuestion = () => {
    const question = {
      questionText: formValuesFromCreateQuestion.questionText,
      choiceA: formValuesFromCreateQuestion.choiceA,
      choiceB: formValuesFromCreateQuestion.choiceB,
      choiceC: formValuesFromCreateQuestion.choiceC,
      choiceD: formValuesFromCreateQuestion.choiceD,
    };
    storeQuestion(question.questionText, question.choiceA,
      question.choiceB, question.choiceC, question.choiceD);

    addQuestionP(question.questionText,
      [
        question.choiceA,
        question.choiceB,
        question.choiceC,
        question.choiceD,
      ]);
    setOneQuestionP();
  };

  const handlePublish = () => {
    setDoneP();
    client.publishQuiz(quizId);
  };

  return (
    <div className="App">
      <h1 className="text-primary">Quiz Wiz</h1>
      {
      !quizTitle && <CreateQuiz onSubmit={handleSubmitTitle} />
      }

      { quizTitle
      && (
      <>
        <h3>
          Title:
          {' '}
          {quizTitle}
        </h3>
      </>
      )}

      {
    quizTitle && (results.length < 4) && <CreateResults onSubmit={handleSubmitResults} />
  }

      {!done && (results.length > 0) && (
      <CreateQuestion
        personalityA={results.find((element) => element.index === 0).name}
        personalityB={results.find((element) => element.index === 1).name}
        personalityC={results.find((element) => element.index === 2).name}
        personalityD={results.find((element) => element.index === 3).name}

        onSubmitPublish={handlePublish}
        onSubmit={handleSubmitQuestion}
        oneQuestionDone={oneQuestionDone}
      />
      ) }
      {quizId && done && (
      <>
        <div>Your quiz:</div>
        <Link to={`/take/${quizId}`}>{quizTitle}</Link>
      </>
      )}
      <div>
        <Link to="/">Home...</Link>
      </div>
    </div>
  );
};

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

const Create = connect(mapStateToProps, mapDispatchToProps)(CreateCore);

export default Create;
