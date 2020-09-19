import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import CreateQuestion from '../components/CreateQuestionForm';


export default {
  title: 'Example/CreateQuestion',
  component: CreateQuestion,
  argTypes: {

  },
};

const Template = (args) => <CreateQuestion />;

export const Primary = Template.bind({});
