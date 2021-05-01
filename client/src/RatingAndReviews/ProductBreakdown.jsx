import React, { useState } from 'react';

const characteristics = {
  quality: {
    1: "poor",
    2: "below average",
    3: "what i expected",
    4: "pretty great",
    5: "perfect",
  },
  comfort: {
    1: "uncomfortable",
    2: "slightly uncomfortable",
    3: "ok",
    4: "comfortable",
    5: "perfect",
  },
  fit: {
    1: "runs tight",
    2: "runs slightly tight",
    3: "perfect",
    4: "runs slightly loose",
    5: "runs loose",
  },
  size: {
    1: "a size too small",
    2: "1/2 size too small",
    3: "perfect",
    4: "1/2 size too big",
    5: "a size too large",
  },
  width: {
    1: "too narrow",
    2: "slightly narrow",
    3: "perfect",
    4: "slightly wide",
    5: "too wide",
  },
  length: {
    1: "runs short",
    2: "runs slightly short",
    3: "perfect",
    4: "runs slightly long",
    5: "runs long",
  },
}

// let characteristicsToRender = Object.keys(characteristics).map((key, index) => {console.log(key), console.log(characteristics[key])});
// console.log(characteristicsToRender)

const ProductBreakdown = ({ data }) => {

  let newData = [];
  let characteristicsToRender = Object.keys(data).map((key, index) => {
    let characteristic = [key, data[key].value];
    newData.push(characteristic);
    console.log('newData:', newData);
  });
  console.log(characteristicsToRender);
  // iterate over characteristicsToRender,
    // populate hella more data...
    // render it in a cool way



  return (
    <div className="product-breakdown">
      [__________][__________][__________]
    </div>
  );
};

export default ProductBreakdown;