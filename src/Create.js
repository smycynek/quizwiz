/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  reduxForm, Field, getFormValues,
} from 'redux-form';
import quizFreakClient from './quizFreakClient';
import CreateQuiz from './CreateQuiz';
import CreateResults from './CreateResults';
import CreateQuestion from './CreateQuestion';

// eslint-disable-next-line react/prop-types
const CreateCore = ({ formValuesFromCreateQuiz, formValuesFromCreateResults }) => {
  const [quizTitle, setQuizTitle] = useState(null);

  const [personalityA, setPersonalityA] = useState(null);
  const [personalityADescription, setPersonalityADescription] = useState(null);

  const [personalityB, setPersonalityB] = useState(null);
  const [personalityBDescription, setPersonalityBDescription] = useState(null);

  const [personalityC, setPersonalityC] = useState(null);
  const [personalityCDescription, setPersonalityCDescription] = useState(null);

  const [personalityD, setPersonalityD] = useState(null);
  const [personalityDDescription, setPersonalityDDescription] = useState(null);

  const handleSubmitTitle = () => {
    setQuizTitle(formValuesFromCreateQuiz.quizTitle);
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
  };

  return (
    <>
    <h1>Quiz Wiz</h1>
      {
      !quizTitle && <CreateQuiz onSubmit={handleSubmitTitle} />
      }

      { quizTitle
      && (
      <>
        <h4>Title</h4>
        <span>
          {quizTitle}
        </span>
      </>
      )}

      {
    quizTitle && !personalityA && <CreateResults onSubmit={handleSubmitResults} />
  }

      {personalityA
      && (
      <>
        <h4>Personalities</h4>
        <div>{personalityA}</div>
        <div>{personalityB}</div>
        <div>{personalityC}</div>
        <div>{personalityD}</div>
      </>
      )}
      {personalityA && <CreateQuestion /> }
      <div>
        <Link to="/">Home...</Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  formValuesFromCreateQuiz: getFormValues('CreateQuiz')(state),
  formValuesFromCreateResults: getFormValues('CreateResults')(state),
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const Create = connect(mapStateToProps, mapDispatchToProps)(CreateCore);

export default Create;
