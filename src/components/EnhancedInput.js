/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

/* eslint-disable react/jsx-filename-extension */
const EnhancedInput = ({
  input, label, placeholder, type, meta: { touched, error },
}) => (
  <div>
    <label className="EnhancedInputLabel"><small><b>{label}</b></small></label>
    <div>
      <input className="StandardInput" {...input} placeholder={placeholder} type={type} />
      <small className="form-text text-danger">{touched && (error && <span>{error}</span>) }</small>
    </div>
  </div>
);

EnhancedInput.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

export default EnhancedInput;
