/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateQuiz from '../containers/CreateQuiz';
import CreateResults from '../containers/CreateResults';
import CreateQuestion from '../containers/CreateQuestion';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const CreateFormMain = ({
  formValuesFromCreateQuiz,
  formValuesFromCreateResults, formValuesFromCreateQuestion,
  createQuizWorkflow, addResultWorkflow, addQuestionWorkflow, quizId, quizTitle, results, questions,
  done, oneQuestionDone, setDoneWorkflow, setOneQuestionDone, reset,
}) => {
  const handleSubmitTitle = () => {
    createQuizWorkflow(formValuesFromCreateQuiz.quizTitle);
  };

  const handleSubmitResults = () => {
    addResultWorkflow(formValuesFromCreateResults.personalityA,
      formValuesFromCreateResults.personalityADescription,
      0, quizId);

    addResultWorkflow(formValuesFromCreateResults.personalityB,
      formValuesFromCreateResults.personalityBDescription,
      1, quizId);

    addResultWorkflow(formValuesFromCreateResults.personalityC,
      formValuesFromCreateResults.personalityCDescription,
      2, quizId);

    addResultWorkflow(formValuesFromCreateResults.personalityD,
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

    addQuestionWorkflow(question.questionText,
      [
        question.choiceA,
        question.choiceB,
        question.choiceC,
        question.choiceD,
      ], quizId);
    setOneQuestionDone();
  };

  const handlePublish = () => {
    setDoneWorkflow(quizId);
  };

  const getLinkText = (id) => {
    const link = document.getElementById(id);
    if (link) {
      return link.href;
    }
    return null;
  };

  const copyLinkText = (bufferId, linkId) => {
    const buffer = document.getElementById(bufferId);
    const linkText = getLinkText(linkId);
    buffer.value = linkText;
    buffer.select();
    document.execCommand('copy');
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
    quizTitle && results && (results.length < 4) && <CreateResults onSubmit={handleSubmitResults} />
  }

      {!done && results && (results.length > 3) && (
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
      <ToastContainer />
      {quizId && done && (
      <>
        <Link id="link_1" onClick={reset} to={`/take/${quizId}`}>
          Your quiz:
          {' '}
          {quizTitle}
        </Link>
        <br />
        <input
          style={{
            display: 'inline-block', opacity: 0.5, height: '11px', fontSize: '10px', width: '450px', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', marginBottom: '10px',
          }}
          className="form-control"
          type="text"
          value={getLinkText('link_1')}
          id="id_copy_buffer"
        />

        <button
          style={{
            margin: '3px', display: 'inline-block', fontSize: '10px', height: '19px', padding: '2px',
          }}

          onClick={() => copyLinkText('id_copy_buffer', 'link_1')}
          type="button"
          className="btn btn-primary"
        >
          &#x1F517; Copy Link
        </button>
      </>
      )}
      <div>
        <Link onClick={reset} to="/">Home...</Link>
      </div>
    </div>
  );
};

CreateFormMain.propTypes = {
  formValuesFromCreateQuiz: PropTypes.object,
  formValuesFromCreateResults: PropTypes.object,
  formValuesFromCreateQuestion: PropTypes.object,
  createQuizWorkflow: PropTypes.func.isRequired,
  addResultWorkflow: PropTypes.func.isRequired,
  addQuestionWorkflow: PropTypes.func.isRequired,
  quizId: PropTypes.string,
  quizTitle: PropTypes.string,
  results: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  done: PropTypes.bool.isRequired,
  oneQuestionDone: PropTypes.bool.isRequired,
  setDoneWorkflow: PropTypes.func.isRequired,
  setOneQuestionDone: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default CreateFormMain;
