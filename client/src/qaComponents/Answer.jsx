import React from 'react';

const Answer = ({ answer }) => {
  const { body, date, answerer_name: answererName } = answer;

  return (
    <div>
      A:
      <span>{body}</span>
      <div>
        {answererName}
      </div>
      <div>
        {date}
      </div>
    </div>
  );
};

export default Answer;
