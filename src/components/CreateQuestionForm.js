/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import EnhancedInput from './EnhancedInput';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const required = (value) => (value ? undefined : 'You must enter someting!');
const tooShort = (value) => (value && value.length < 3 ? 'Make it good!' : undefined);

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
    reset();
    onSubmit();
  };

  const onPublishWrapper = (e) => {
    e.preventDefault();
    onSubmitPublish();
  };

  return (
    <>
      <div>
        <div className="Instructions">
          <p>
          Question
          {' '}
          {questionIndex}
          {': '}
          </p>
          <p>
          Add a question, pairing the choices with the personality outcomes you
          entered previously.
          </p>
        </div>
        <form>
          <div className="InputWrapper">
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
          </div>
          <div className="ShortInputWrapper">
            <div className="form-group">
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
          </div>

          <div className="ShortInputWrapper">
            <div className="form-group">
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
          </div>

          <div className="ShortInputWrapper">
            <div className="form-group">
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
          </div>

          <div className="ShortInputWrapper">
            <div className="form-group">
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
          </div>

          <div className="ButtonWrapper">
            <button
              disabled={invalid}
              className="btn btn-primary"
              type="button"
              onClick={onSubmitWrapper}
            >
              Add this question
            </button>
          </div>
          <div className="ButtonWrapper">
            <button
              disabled={!oneQuestionDone || !invalid}
              className="btn btn-primary"
              type="button"
              onClick={onPublishWrapper}
            >
              Finished...
            </button>
          </div>
          <div>
            <label>
              Show quiz in public list?
              <Field
                component="input"
                type="checkbox"
                name="makeListable"
                defaultChecked
                defaultValue="on"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

CreateQuestionForm.propTypes = {
  invalid: PropTypes.bool,
  onSubmit: PropTypes.func,
  onSubmitPublish: PropTypes.func,
  personalityA: PropTypes.string,
  personalityB: PropTypes.string,
  personalityC: PropTypes.string,
  personalityD: PropTypes.string,
  oneQuestionDone: PropTypes.bool,
  questionIndex: PropTypes.number,
  reset: PropTypes.func,
};

export default CreateQuestionForm;
