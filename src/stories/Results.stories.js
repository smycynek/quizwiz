import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import CreateResults from '../components/CreateResultsForm';

export default {
  title: 'Example/CreateResults',
  component: CreateResults,
  argTypes: {

  },
};

const Template = (args) => <CreateResults />;

export const Primary = Template.bind({});
