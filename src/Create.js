/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import quizFreakClient from './quizFreakClient';
import CreateQuiz from './CreateQuiz';
import CreateResults from './CreateResults';
import CreateQuestion from './CreateQuestion';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// eslint-disable-next-line react/prop-types
const CreateCore = ({
  formValuesFromCreateQuiz,
  formValuesFromCreateResults, formValuesFromCreateQuestion,
}) => {
  const [quizTitle, setQuizTitle] = useState(null);

  const [quizId, setQuizId] = useState(null);

  const [personalityA, setPersonalityA] = useState(null);
  const [personalityADescription, setPersonalityADescription] = useState(null);

  const [personalityB, setPersonalityB] = useState(null);
  const [personalityBDescription, setPersonalityBDescription] = useState(null);

  const [personalityC, setPersonalityC] = useState(null);
  const [personalityCDescription, setPersonalityCDescription] = useState(null);

  const [personalityD, setPersonalityD] = useState(null);
  const [personalityDDescription, setPersonalityDDescription] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [done, setDone] = useState(false);

  const [oneQuestion, setOneQuestion] = useState(false);
  const client = quizFreakClient();

  const storeQuiz = (name) => {
    client.createQuiz(name)
      .then((res) => {
        const { data } = res;
        setQuizId(data.id);
      },
      (err) => {
        console.log(err);
      });
  };

  const storeResult = (name, description) => {
    client.createResult(name, description, quizId)
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
    setQuizTitle(formValuesFromCreateQuiz.quizTitle);
    storeQuiz(formValuesFromCreateQuiz.quizTitle);
  };

  const handleSubmitResults = () => {
    setPersonalityA(formValuesFromCreateResults.personalityA);
    setPersonalityADescription(formValuesFromCreateResults.personalityADescription);

    setPersonalityB(formValuesFromCreateResults.personalityB);
    setPersonalityBDescription(formValuesFromCreateResults.personalityBDescription);

    setPersonalityC(formValuesFromCreateResults.personalityC);
    setPersonalityCDescription(formValuesFromCreateResults.personalityCDescription);

    setPersonalityD(formValuesFromCreateResults.personalityD);
    setPersonalityDDescription(formValuesFromCreateResults.personalityDDescription);

    storeResult(formValuesFromCreateResults.personalityA,
      formValuesFromCreateResults.personalityADescription);
    storeResult(formValuesFromCreateResults.personalityB,
      formValuesFromCreateResults.personalityBDescription);
    storeResult(formValuesFromCreateResults.personalityC,
      formValuesFromCreateResults.personalityCDescription);
    storeResult(formValuesFromCreateResults.personalityD,
      formValuesFromCreateResults.personalityDDescription);
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
    setOneQuestion(true);
  };

  const handlePublish = () => {
    setDone(true);
    client.publishQuiz(quizId);
  };

  return (
    <>
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
    quizTitle && !personalityA && <CreateResults onSubmit={handleSubmitResults} />
  }

      {!done && personalityA && (
      <CreateQuestion
        personalityA={personalityA}
        personalityB={personalityB}
        personalityC={personalityC}
        personalityD={personalityD}

        onSubmitPublish={handlePublish}
        onSubmit={handleSubmitQuestion}
        oneQuestion={oneQuestion}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  formValuesFromCreateQuiz: getFormValues('CreateQuiz')(state),
  formValuesFromCreateResults: getFormValues('CreateResults')(state),
  formValuesFromCreateQuestion: getFormValues('CreateQuestion')(state),
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const Create = connect(mapStateToProps, mapDispatchToProps)(CreateCore);

export default Create;
