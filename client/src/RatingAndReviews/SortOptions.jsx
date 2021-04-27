import React, { useState } from 'react';

const SortOptions = ({ data }) => {
  const [sortedBy, setSortedBy] = useState('Relevance');
  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>
        {data.length} reviews, sorted by
        <span style={{ textDecorationLine: 'underline' }}>
          {sortedBy}
        </span>
      </span>
    </div>
  );
};

export default SortOptions;