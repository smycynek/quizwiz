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
import quizFreakClient from '../api/quizFreakClient';
import CreateQuiz from '../containers/CreateQuiz';
import CreateResults from '../containers/CreateResults';
import CreateQuestion from '../containers/CreateQuestion';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

import { Creators } from '../redux/types';

// eslint-disable-next-line react/prop-types
const CreateFormMain = ({
  formValuesFromCreateQuiz,
  formValuesFromCreateResults, formValuesFromCreateQuestion,
  createQuizP, addResultP, addQuestionP, quizId, quizTitle, results, questions,
  done, oneQuestionDone, setDoneP, setOneQuestionP,
}) => {
  const client = quizFreakClient();

  const handleSubmitTitle = () => {
    createQuizP(formValuesFromCreateQuiz.quizTitle);
  };

  const handleSubmitResults = () => {
    addResultP(formValuesFromCreateResults.personalityA,
      formValuesFromCreateResults.personalityADescription,
      0, quizId);

    addResultP(formValuesFromCreateResults.personalityB,
      formValuesFromCreateResults.personalityBDescription,
      1, quizId);

    addResultP(formValuesFromCreateResults.personalityC,
      formValuesFromCreateResults.personalityCDescription,
      2, quizId);

    addResultP(formValuesFromCreateResults.personalityD,
      formValuesFromCreateResults.personalityDDescription,
      3, quizId);
  };

  const handleSubmitQuestion = () => {
    const question = {
      questionText: formValuesFromCreateQuestion.questionText,
      choiceA: formValuesFromCreateQuestion.choiceA,
      choiceB: formValuesFromCreateQuestion.choiceB,
      choiceC: formValuesFromCreateQuestion.choiceC,
      choiceD: formValuesFromCreateQuestion.choiceD,
    };

    addQuestionP(question.questionText,
      [
        question.choiceA,
        question.choiceB,
        question.choiceC,
        question.choiceD,
      ], quizId);
    setOneQuestionP();
  };

  const handlePublish = () => {
    setDoneP(quizId);
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

      {!done && (results.length > 3) && (
      <CreateQuestion
        personalityA={results.find((element) => element.index === 0).name}
        personalityB={results.find((element) => element.index === 1).name}
        personalityC={results.find((element) => element.index === 2).name}
        personalityD={results.find((element) => element.index === 3).name}

        onSubmitPublish={handlePublish}
        onSubmit={handleSubmitQuestion}
        oneQuestionDone={oneQuestionDone}
        questionIndex={questions.length + 1}
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

export default CreateFormMain;
