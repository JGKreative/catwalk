import React from 'react';
// import PropTypes from 'prop-types';
import Question from './Question';

const QuestionsList = () => (
  <div>
    Q:
    <Question body="why do we have shower thoughts, but not bath thoughts?" />
    <Question body="why do I feel the need to add clever questions for a test?" />
  </div>
);

// Question.propTypes = {
// };

export default QuestionsList;
