/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { connect } from 'react-redux';
import {
  reduxForm, Field,
} from 'redux-form';
import EnhancedInput from './EnhancedInput';

const required = (value) => (value ? undefined : 'You must enter someting!');
const tooShort = (value) => (value && value.length < 3 ? 'Make it good!' : undefined);

// eslint-disable-next-line react/prop-types
const CreateQuestionFormLayout = ({ invalid, onSubmit }) => (
  <>
    <div>
      <h4>
        Add a question, pairing the choices with the personality outcomes you entered previously.
      </h4>
      <form>
        <div className="form-group">
          <Field label="Question text" placeholder="After a long day at work, I like to:" validate={[required, tooShort]} className="form-control" name="questionText" component={EnhancedInput} type="text" />
        </div>

        <div style={{ paddingLeft: '12px' }} className="form-group">
          <Field label="Choice A" placeholder="Impulse buy a sports car" validate={[required, tooShort]} className="form-control" name="choiceA" component={EnhancedInput} type="text" />
        </div>

        <div style={{ paddingLeft: '12px' }} className="form-group">
          <Field label="Choice B" placeholder="Re-evaluate the focus of my blog." validate={[required, tooShort]} className="form-control" name="choiceB" component={EnhancedInput} type="text" />
        </div>

        <div style={{ paddingLeft: '12px' }} className="form-group">
          <Field label="Choice C" placeholder="Throw a party" validate={[required, tooShort]} className="form-control" name="choiceC" component={EnhancedInput} type="text" />
        </div>

        <div style={{ paddingLeft: '12px' }} className="form-group">
          <Field label="Choice D" placeholder="Invent a robot that makes pancakes and give life coaching advice" validate={[required, tooShort]} className="form-control" name="choiceD" component={EnhancedInput} type="text" />
        </div>

        <div style={{ padding: '5px' }}>

          <button disabled={invalid} className="btn btn-primary" type="button" onClick={onSubmit}>Add another question...</button>
        </div>
        <div style={{ padding: '5px' }}>
          <button disabled={invalid} className="btn btn-primary" type="button" onClick={onSubmit}>Finish...</button>
        </div>
      </form>
    </div>
  </>
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const CreateQuestionForm = reduxForm({
  // a unique name for the form
  form: 'CreateQuestion',
})(CreateQuestionFormLayout);
const CreateQuestion = connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);

export default CreateQuestion;
