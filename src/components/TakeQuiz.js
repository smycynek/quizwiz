/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CasualQuiz from 'react-casual-quiz/lib';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import quizFreakClient from '../api/quizFreakClient';

import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import pinterest from '../images/pinterest.svg';
import linkedin from '../images/linkedin.svg';

import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const TakeQuiz = ({ match }) => {
  const { params: { id } } = match;
  const client = quizFreakClient();
  const [quizData, setQuizData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);
  const [quizTwitter, setQuizTwitter] = useState('');
  const [quizLinkedIn, setQuizLinkedIn] = useState('');
  const [quizFacebook, setQuizFacebook] = useState('');

  function fetchQuiz(quizId) {
    setWaiting(true);
    setError(false);

    const success = (res) => {
      const { data } = res;
      setQuizData(data);
      setWaiting(false);
      const quizUrl = `https://stevenvictor.net/quizwiz/%23/quizwiz/take/${quizId}`;
      const twitterLink = `http://twitter.com/share?text=${data.name}&url=${quizUrl}&hashtags=quizwiz`;
      const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${quizUrl}`;
      const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${quizUrl}&title=${data.name}&source=stevenvictor.net`;
      setQuizFacebook(facebookLink);
      setQuizTwitter(twitterLink);
      setQuizLinkedIn(linkedinLink);
    };

    const failure = (err) => {
      setWaiting(false);
      setError(true);
      setQuizData(null);
      console.log(err);
    };

    if (quizId) {
      client.getQuiz(quizId)
        .then(success, failure);
    } else {
      client.getRandomQuiz()
        .then(success, failure);
    }
  }

  useEffect(() => fetchQuiz(id), []);

  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <title>{quizData ? `Quiz Wiz: ${quizData.name}` : 'Quiz Wiz'}</title>
        </Helmet>

        {waiting && <div>Loading quiz...</div>}
        {error && <div>Quiz not found or error loading...</div>}
        {quizData && !error && (
        <CasualQuiz
          name={quizData.name}
          results={quizData.results}
          questions={quizData.questions}
        />
        )}
        <div>

          <a href={quizTwitter} target="_blank" rel="noopener noreferrer">
            <img className="socialMedia" alt="twitter" src={twitter} />
          </a>
          <a href={quizLinkedIn} target="_blank" rel="noopener noreferrer">
            <img className="socialMedia" alt="linkedin" src={linkedin} />
          </a>
          <a href={quizFacebook} target="_blank" rel="noopener noreferrer">
            <img className="socialMedia" alt="facebook" src={facebook} />
          </a>
          <p>Share this quiz!</p>
        </div>
        <div>
          <Link to="/">Home...</Link>
        </div>
      </div>
    </>
  );
};

TakeQuiz.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TakeQuiz;
