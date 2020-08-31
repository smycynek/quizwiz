/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CreateQuiz = () => {
  const [quizName, setQuizName] = useState(null);
  const createQuiz = () => {};
  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };
  return (
    <>
      <div>
        <label>
          Give your quiz a name
          <input
            style={{ width: '600px' }}
            placeholder="Which BoJack Horseman character are you?"
            className="form-control"
            type="text"
            value={quizName}
            onChange={handleQuizNameChange}
          />
        </label>
      </div>
      <div>
        <button className="btn btn-primary" type="button" onClick={createQuiz}>Next...</button>
      </div>
    </>
  );
};
export default CreateQuiz;
