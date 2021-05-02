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

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div>
      <br />
      <span>{body}</span>
      <br />
      <div>
        {answererName}
      </div>
      <br />
      <div>
        {formattedDate}
      </div>
      <br />
      <Helpfulness parentId={id} parentType="answers" helpfulnessRank={helpfulness} />
      <br />
      <br />
      -------------------
    </div>
  );
};

export default Answer;
