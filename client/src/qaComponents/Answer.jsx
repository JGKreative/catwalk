import React from 'react';
import Helpfulness from './Helpfulness';

const Answer = ({ answer }) => {
  const {
    body,
    date,
    answerer_name: answererName,
    id,
    helpfulness,
  } = answer;

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
      <Helpfulness parentId={id} parentType="answer" helpfulnessRank={helpfulness} />
    </div>
  );
};

export default Answer;
