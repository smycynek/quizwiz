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

const required = (value) => (value ? undefined : 'You must enter all personality types!');
const tooShort = (value) => (value && value.length < 1 ? 'Make it a good personality type!' : undefined);

// eslint-disable-next-line react/prop-types
const CreateResultsFormLayout = ({ invalid, onSubmit }) => (
  <>
    <div>
      <h4 className="text-secondary">
        What are the four quiz outcomes, i.e, the personality results (corresponding
        to question choices A, B, C, and D) ?
      </h4>
      <form>
        <div style={{ padding: '12px' }}>
          <div className="form-group">
            <Field label="Personality Type A" placeholder="BoJack" validate={[required, tooShort]} className="form-control" name="personalityA" component={EnhancedInput} type="text" />
            <Field label="Description" placeholder="Your swagger and sense of self steal the show." validate={[required, tooShort]} className="form-control" name="personalityADescription" component={EnhancedInput} type="text" />
          </div>
        </div>

        <div style={{ padding: '12px' }}>
          <div className="form-group">
            <Field label="Personality Type B" placeholder="Diane" validate={[required, tooShort]} className="form-control" name="personalityB" component={EnhancedInput} type="text" />
            <Field label="Description" placeholder="Your social conscience causes you great conflict." validate={[required, tooShort]} className="form-control" name="personalityBDescription" component={EnhancedInput} type="text" />
          </div>
        </div>

        <div style={{ padding: '12px' }}>
          <div className="form-group">
            <Field label="Personality Type C" placeholder="Mr. Peanutbutter" validate={[required, tooShort]} className="form-control" name="personalityC" component={EnhancedInput} type="text" />
            <Field label="Description" placeholder="Your carefree zest for life propels you, often exhausting others." validate={[required, tooShort]} className="form-control" name="personalityCDescription" component={EnhancedInput} type="text" />
          </div>

        </div>

        <div style={{ padding: '12px' }}>
          <div className="form-group">
            <Field label="Personality Type D" placeholder="Todd" validate={[required, tooShort]} className="form-control" name="personalityD" component={EnhancedInput} type="text" />
            <Field label="Description" placeholder="Your childlike wonder never ceases to amaze and amuse." validate={[required, tooShort]} className="form-control" name="personalityDDescription" component={EnhancedInput} type="text" />
          </div>

        </div>
        <div>
          <button disabled={invalid} onClick={onSubmit} className="btn btn-primary" type="button">Next...</button>
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

const CreateResultsForm = reduxForm({
  // a unique name for the form
  form: 'CreateResults',
})(CreateResultsFormLayout);
const CreateResults = connect(mapStateToProps, mapDispatchToProps)(CreateResultsForm);

export default CreateResults;
