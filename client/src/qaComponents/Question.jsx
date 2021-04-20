import React from 'react';
import PropTypes from 'prop-types';
import AnswersList from './AnswersList';

const Question = ({ bodyText }) => (
  <div>
    {bodyText}
    <AnswersList />
    <div>add some buttons</div>
  </div>
);

Question.propTypes = {
  bodyText: PropTypes.string.isRequired,
};

export default Question;
