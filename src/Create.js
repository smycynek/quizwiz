/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import quizFreakClient from './quizFreakClient';
// eslint-disable-next-line react/prop-types
const Create = () => {
  const client = quizFreakClient();
  const [name, setName] = useState(null);
  const [quizId, setQuizId] = useState(null);
  const [resultId, setResultId] = useState(null);
  const [questionId, setQuestionId] = useState(null);
  const [resultName, setResultName] = useState(null);
  const [resultDescription, setResultDescription] = useState(null);
  const [questionText, setQuestionText] = useState(null);

  const [questionChoice1, setQuestionChoice1] = useState(null);
  const [questionChoice2, setQuestionChoice2] = useState(null);
  const [questionChoice3, setQuestionChoice3] = useState(null);
  const [questionChoice4, setQuestionChoice4] = useState(null);

  const handleQuizNameChange = (e) => {
    setName(e.target.value);
  };

  const handleResultNameChange = (e) => {
    setResultName(e.target.value);
  };

  const handleResultDescriptionChange = (e) => {
    setResultDescription(e.target.value);
  };

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleChoice1Change = (e) => {
    setQuestionChoice1(e.target.value);
  };

  const handleChoice2Change = (e) => {
    setQuestionChoice2(e.target.value);
  };

  const handleChoice3Change = (e) => {
    setQuestionChoice3(e.target.value);
  };

  const handleChoice4Change = (e) => {
    setQuestionChoice4(e.target.value);
  };

  const createQuiz = () => {
    client.createQuiz(name)
      .then((res) => {
        const { data } = res;
        setQuizId(data.id);
      },
      (err) => {
        console.log(err);
      });
  };

  const createResult = () => {
    client.createResult(resultName, resultDescription, quizId)
      .then((res) => {
        const { data } = res;
        setResultId(data.id);
      },
      (err) => {
        console.log(err);
      });
  };

  const createQuestion = () => {
    client.createQuestion(questionText,
      [questionChoice1, questionChoice2, questionChoice3, questionChoice4],
      quizId)
      .then((res) => {
        const { data } = res;
        setQuestionId(data.id);
      },
      (err) => {
        console.log(err);
      });
  };

  const publishQuiz = () => {
    client.publishQuiz(quizId)
      .then((res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      <div>
        <h1 className="text-primary">Create a quiz...</h1>
        <label>
          {' '}
          Quiz name
          <input className="form-control" type="text" value={name} onChange={handleQuizNameChange} />
        </label>
        <div>
          <button className="btn btn-primary" type="button" onClick={createQuiz}>Create Quiz...</button>
        </div>
        <div>
          <span>{quizId}</span>
          <span>{questionId}</span>
          <span>{resultId}</span>
        </div>

        <div>
          <label>
            {' '}
            Result Name
            <input className="form-control" type="text" value={resultName} onChange={handleResultNameChange} />
          </label>
        </div>
        <div>
          <label>
            {' '}
            Result Description
            <input className="form-control" type="text" value={resultDescription} onChange={handleResultDescriptionChange} />
          </label>
        </div>
        <div>
          <button className="btn btn-primary" type="button" onClick={createResult}>Create Result...</button>
        </div>
        <div />
        <div>
          <label>
            {' '}
            Question text
            <input className="form-control" type="text" value={questionText} onChange={handleQuestionTextChange} />
          </label>
        </div>

        <div>
          <label>
            {' '}
            Choice 1
            <input className="form-control" type="text" value={questionChoice1} onChange={handleChoice1Change} />
          </label>
        </div>

        <div>
          <label>
            {' '}
            Choice 2
            <input className="form-control" type="text" value={questionChoice2} onChange={handleChoice2Change} />
          </label>
        </div>

        <div>
          <label>
            {' '}
            Choice 3
            <input className="form-control" type="text" value={questionChoice3} onChange={handleChoice3Change} />
          </label>
        </div>

        <div>
          <label>
            {' '}
            Choice 4
            <input className="form-control" type="text" value={questionChoice4} onChange={handleChoice4Change} />
          </label>
        </div>

        <div>
          <button className="btn btn-primary" type="button" onClick={createQuestion}>Create Question...</button>
        </div>

        <div>
          <button className="btn btn-primary" type="button" onClick={publishQuiz}>Publish</button>
        </div>

        <Link to="/">Home...</Link>
      </div>
    </>
  );
};
export default Create;
