/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CreateQuestion = () => {
  const [quizName, setQuizName] = useState(null);
  const createQuiz = () => {};
  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };
  return (
    <>
      <div>
        <p>
          Add a question, keeping in mind the quiz result choices you selected for A,
          B,C and D.
        </p>
        <div>
          <div>
            <label>
              Question text
              <input
                style={{ width: '600px' }}
                placeholder="After a long day at work, I like to"
                className="form-control"
                type="text"
              />
            </label>
          </div>
          <div style={{ padding: '20px' }}>
            <div>
              <label>
                Choice A
                <input
                  style={{ width: '600px' }}
                  placeholder="Impulse buy a sports car."
                  className="form-control"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Choice B
                <input
                  style={{ width: '600px' }}
                  placeholder="Re-evaluate the focus of my blog."
                  className="form-control"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Choice C
                <input
                  style={{ width: '600px' }}
                  placeholder="Throw a party."
                  className="form-control"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label>
                Choice D
                <input
                  style={{ width: '600px' }}
                  placeholder="Invent a robot that makes pancakes and give life coaching advice."
                  className="form-control"
                  type="text"
                />
              </label>
            </div>

          </div>

          <div>
            <button className="btn btn-primary" type="button" onClick={createQuiz}>Next...</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateQuestion;
