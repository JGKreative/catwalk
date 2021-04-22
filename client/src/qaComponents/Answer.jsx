import React from 'react';

const Answer = ({ answer }) => (
  <div>
    A:
    <span>{answer.bodyText}</span>
    <div>
      {`${answer.username} `}
      |
      {` ${answer.timestamp}`}
    </div>
  </div>
);

export default Answer;
