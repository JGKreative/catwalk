import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ bodyText }) => (
  <div>{bodyText}</div>
);

Question.propTypes = {
  bodyText: PropTypes.string.isRequired,
};

export default Question;
