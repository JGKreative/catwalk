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
      <span style={{fontSize:'large'}}>{body}</span>
      <br />
      <br />
      <span>
        {answererName}
      </span>
      {'   ||   '}
      <span>
        {formattedDate}
      </span>
      {'   ||   '}
      <Helpfulness parentId={id} parentType="answers" helpfulnessRank={helpfulness} />
      <br />
      <br />
      -------------------
    </div>
  );
};

export default Answer;
