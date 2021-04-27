import React, { useState } from 'react';

const SortOptions = ({ data }) => {
  const [sortedBy, setSortedBy] = useState('relevance');
  console.log('sortedBy: ', sortedBy)

  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>
        {data.length} reviews, sorted by {" "}
        <span style={{ textDecorationLine: 'underline' }}>
          <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
            <option value="relevance"> Relevance </option>
            <option value="helpfulness"> Helpfulness </option>
            <option value="newest"> Newest </option>
          </select>
        </span>
      </span>
    </div>
  );
};

export default SortOptions;

/*
L10 needs to be a dropdown selector
*/