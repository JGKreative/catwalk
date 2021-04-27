import React, { useState } from 'react';

const Helpfulness = ({ parentId, helpfulnessRank, parentType }) => {
  const [hasVoted, updateVote] = useState(false);

  const submitVote = () => {
    console.log(`eventually I will submit type ${parentType} and ${parentId} to the API`);
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
