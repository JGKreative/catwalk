import React from 'react';
// import PropTypes from 'prop-types';

const Answer = ({ answer }) => (
  <div>
    <span>{answer.bodyText}</span>
    <span>
      {answer.username}
      |
      {answer.timestamp}
    </span>
  </div>
);

// Answer.propTypes = {
//   answer: PropTypes.isRequired,
// };

export default Answer;
