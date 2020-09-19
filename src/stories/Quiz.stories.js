import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import CreateQuiz from '../components/CreateQuiz';

export default {
  title: 'Example/CreateQuiz',
  component: CreateQuiz,
  argTypes: {

  },
};

const Template = (args) => <CreateQuiz />;

export const Primary = Template.bind({});
