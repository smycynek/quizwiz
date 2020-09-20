/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Field } from 'redux-form';
import EnhancedInput from './EnhancedInput';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const required = (value) => (value ? undefined : 'You must enter someting!');
const tooShort = (value) => (value && value.length < 3 ? 'Make it good!' : undefined);

// eslint-disable-next-line react/prop-types
const CreateQuestionForm = ({
  invalid,
  onSubmit,
  onSubmitPublish,
  personalityA,
  personalityB,
  personalityC,
  personalityD,
  oneQuestionDone,
  questionIndex,
  reset,
}) => {
  const onSubmitWrapper = () => {
    onSubmit();
    reset();
  };

  const publish = (invalidState) => {
    if (!invalidState) {
      onSubmit();
    }
    onSubmitPublish();
  };

  return (
    <>
      <div>
        <h4 className="text-secondary"> Question {questionIndex} </h4>
        <h4 className="text-secondary">
          Add a question, pairing the choices with the personality outcomes you
          entered previously.
        </h4>
        <form>
          <div className="form-group">
            <Field
              label="Question text"
              placeholder="After a long day at work, I like to:"
              validate={[required, tooShort]}
              className="form-control"
              name="questionText"
              component={EnhancedInput}
              type="text"
            />
          </div>

          <div style={{ paddingLeft: '12px' }} className="form-group">
            <Field
              label={`Choice A (${personalityA})`}
              placeholder="Impulse buy a sports car"
              validate={[required, tooShort]}
              className="form-control"
              name="choiceA"
              component={EnhancedInput}
              type="text"
            />
          </div>

          <div style={{ paddingLeft: '12px' }} className="form-group">
            <Field
              label={`Choice B (${personalityB})`}
              placeholder="Re-evaluate the focus of my blog."
              validate={[required, tooShort]}
              className="form-control"
              name="choiceB"
              component={EnhancedInput}
              type="text"
            />
          </div>

          <div style={{ paddingLeft: '12px' }} className="form-group">
            <Field
              label={`Choice C (${personalityC})`}
              placeholder="Throw a party"
              validate={[required, tooShort]}
              className="form-control"
              name="choiceC"
              component={EnhancedInput}
              type="text"
            />
          </div>

          <div style={{ paddingLeft: '12px' }} className="form-group">
            <Field
              label={`Choice D (${personalityD})`}
              placeholder="Invent a robot that makes pancakes and give life coaching advice"
              validate={[required, tooShort]}
              className="form-control"
              name="choiceD"
              component={EnhancedInput}
              type="text"
            />
          </div>

          <div style={{ padding: '5px' }}>
            <button
              disabled={invalid}
              className="btn btn-primary"
              type="button"
              onClick={onSubmitWrapper}
            >
              Add another question
            </button>
          </div>
          <div style={{ padding: '5px' }}>
            <button
              disabled={!oneQuestionDone && invalid}
              className="btn btn-primary"
              type="button"
              onClick={() => publish(invalid)}
            >
              Finished...
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateQuestionForm;
