/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useLocation } from 'react-router-dom';

import App from './App';

const LocationShell = () => {
  const location = useLocation();
  console.log(location.search);
  return (<App id={location.search.split('=')[1]} />);
};

export default LocationShell;
