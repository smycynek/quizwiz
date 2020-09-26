/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import EnhancedInput from './EnhancedInput';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const required = (value) => (value ? undefined : 'You must have a quiz title!');
const tooShort = (value) => (value && value.length < 5 ? 'Make it a good title!' : undefined);

const CreateQuizForm = ({ invalid, onSubmit }) => (
  <>
    <form>
      <div>
        <h4 className="text-secondary">Give your quiz a name</h4>
        <div className="form-group">
          <Field label="Title" placeholder="Which BoJack Horseman character are you?" validate={[required, tooShort]} className="form-control" name="quizTitle" component={EnhancedInput} type="text" />
        </div>

      </div>
      <div>
        <button disabled={invalid} onClick={onSubmit} className="btn btn-primary" type="button">Next...</button>
      </div>
    </form>
  </>
);

CreateQuizForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default CreateQuizForm;
