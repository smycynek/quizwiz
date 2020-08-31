/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CreateResults = () => {
  const [quizName, setQuizName] = useState(null);
  const createQuiz = () => {};
  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };
  return (
    <>
      <div>
        <p>
          What are the four quiz outcomes, i.e, the personality results (corresponding
          to question choices A, B, C, and D) ?
        </p>
        <div style={{ padding: '12px' }}>
          <div>
            <label>
              Personality type A
              <input
                style={{ width: '600px' }}
                placeholder="BoJack"
                className="form-control"
                type="text"
              />
            </label>
          </div>

          <div>
            <label>
              Description
              <input
                style={{ width: '600px' }}
                placeholder="Your swagger and sense of self steal the show."
                className="form-control"
                type="text"
              />
            </label>
          </div>
        </div>

        <div style={{ padding: '12px' }}>
          <div>
            <label>
              Personality type B
              <input
                style={{ width: '600px' }}
                placeholder="Diane"
                className="form-control"
                type="text"
              />
            </label>
          </div>

          <div>
            <label>
              Description
              <input
                style={{ width: '600px' }}
                placeholder="Your level head and social conscience cause you great conflict."
                className="form-control"
                type="text"
              />
            </label>
          </div>
        </div>
        <div style={{ padding: '12px' }}>
          <div>
            <label>
              Personality type C
              <input
                style={{ width: '600px' }}
                placeholder="Mr. Peanutbutter"
                className="form-control"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <input
                style={{ width: '600px' }}
                placeholder="Your carefree zest for life propels you, often exhausting others."
                className="form-control"
                type="text"
              />
            </label>
          </div>
        </div>
        <div style={{ padding: '12px' }}>
          <div>
            <label>
              Personality type D
              <input
                style={{ width: '600px' }}
                placeholder="Todd"
                className="form-control"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <input
                style={{ width: '600px' }}
                placeholder="Your childlike wonder never ceases to amaze and amuse."
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
    </>
  );
};
export default CreateResults;
