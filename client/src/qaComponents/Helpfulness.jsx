import React, { useState } from 'react';
import { reporthelpful } from './ApiController';

const Helpfulness = ({ parentId, helpfulnessRank, parentType }) => {
  const [hasVoted, updateVote] = useState(false);

  const propDrillFiller = () => {
    console.log('make qa context for api and refresh questions so you don\'t have to prop drill me')
  };

  const submitVote = () => {
    reporthelpful(parentType, parentId, 'helpful', propDrillFiller);
  };

  const handleVote = (event) => {
    event.preventDefault();
    if (!hasVoted) {
      submitVote();
      updateVote(true);
    }
  };

  return (
    <div>
      Helpful?
      <span role="button" onClick = {handleVote}>
        Yes(
        {helpfulnessRank}
        )
      </span>
    </div>
  );
};

export default Helpfulness;
