/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */

import { connect } from 'react-redux';
import {
  reduxForm,
} from 'redux-form';

import CreateQuestionForm from '../components/CreateQuestionForm';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

const CreateQuestion = connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'CreateQuestion' })(CreateQuestionForm));
export default CreateQuestion;
