/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import { connect } from 'react-redux';
import {
  reduxForm,
} from 'redux-form';

import CreateQuizForm from '../components/CreateQuizForm';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const CreateQuiz = connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'CreateQuiz' })(CreateQuizForm));
export default CreateQuiz;
