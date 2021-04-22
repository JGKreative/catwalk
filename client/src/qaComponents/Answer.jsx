import React from 'react';

const Answer = ({ body, date, answerer_name: answererName }) => (
  <div>
    A:
    <span>{body}</span>
    <div>
      {`${answererName} `}
      |
      {` ${date}`}
    </div>
  </div>
);

export default Answer;
