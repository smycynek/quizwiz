/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useLocation } from 'react-router-dom';

import TakeQuiz from './TakeQuiz';

const LocationShell = () => {
  const location = useLocation();
  console.log(location.search);
  return (<TakeQuiz id={location.search.split('=')[1]} />);
};

export default LocationShell;
