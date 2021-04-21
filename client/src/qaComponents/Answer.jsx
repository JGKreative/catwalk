import React from 'react';

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

export default Answer;
