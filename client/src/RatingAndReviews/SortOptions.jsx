import React, { useState } from 'react';

const SortOptions = ({ data, setSorted }) => {

  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>
        {data.length} reviews, sorted by {" "}
        <span style={{ textDecorationLine: 'underline' }}>
          <select onChange={(e) => setSorted(e.target.value)}>
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
