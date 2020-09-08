/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

/* eslint-disable react/jsx-filename-extension */
const EnhancedInput = ({
  // eslint-disable-next-line react/prop-types
  input, label, placeholder, type, meta: { touched, error },
}) => (
  <div>
    <label><small><b>{label}</b></small></label>
    <div>
      <input style={{ width: '600px' }} {...input} placeholder={placeholder} type={type} />
      <small className="form-text text-danger">{touched && (error && <span>{error}</span>) }</small>
    </div>
  </div>
);

EnhancedInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

export default EnhancedInput;
