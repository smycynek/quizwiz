/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { connect } from 'react-redux';
import {
  reduxForm, Field,
} from 'redux-form';
import EnhancedInput from './EnhancedInput';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const required = (value) => (value ? undefined : 'You must have a quiz title!');
const tooShort = (value) => (value && value.length < 5 ? 'Make it a good title!' : undefined);

// eslint-disable-next-line react/prop-types
const CreateQuizFormLayout = ({ invalid, onSubmit }) => (
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

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const CreateQuizForm = reduxForm({
  // a unique name for the form
  form: 'CreateQuiz',
})(CreateQuizFormLayout);
const CreateQuiz = connect(mapStateToProps, mapDispatchToProps)(CreateQuizForm);
export default CreateQuiz;
