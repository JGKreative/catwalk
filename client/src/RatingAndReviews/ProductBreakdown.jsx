import React, { useState } from 'react';

const characteristics = {
  Quality: {
    1: "poor",
    2: "below average",
    3: "what i expected",
    4: "pretty great",
    5: "perfect",
  },
  Comfort: {
    1: "uncomfortable",
    2: "slightly uncomfortable",
    3: "ok",
    4: "comfortable",
    5: "perfect",
  },
  Fit: {
    1: "runs tight",
    2: "runs slightly tight",
    3: "perfect",
    4: "runs slightly loose",
    5: "runs loose",
  },
  Size: {
    1: "a size too small",
    2: "1/2 size too small",
    3: "perfect",
    4: "1/2 size too big",
    5: "a size too large",
  },
  Width: {
    1: "too narrow",
    2: "slightly narrow",
    3: "perfect",
    4: "slightly wide",
    5: "too wide",
  },
  Length: {
    1: "runs short",
    2: "runs slightly short",
    3: "perfect",
    4: "runs slightly long",
    5: "runs long",
  },
};

const ProductBreakdown = ({ data }) => {
  const dummyBar = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
  const marker = <ion-icon name="triangle-sharp" />;

  const plotRatingToBar = (rating, bar) => {
    let barSet = [];
    let count = 0;
    while (count < rating) {
      let difference = rating - count;
      if (difference > 10) {
        barSet.push(bar);
        count += 10;
        difference = rating - count;
      } else if (difference <= 10) {
        let newBar = bar.slice();
        newBar.splice(difference -1, 1, '^')
        barSet.push(newBar)
        break;
      }
    }
    return barSet;
  }

  const formatData = (charsData) => {
    let breakdownSet = [];
    Object.keys(charsData).map((key, index) => {
      let rating = Number(charsData[key].value).toFixed(1);
      let convertedRating = Math.round(((Number(rating) * 20) / 3.33));
      let oneValue = characteristics[key][1];
      let threeValue = characteristics[key][3];
      let fiveValue = characteristics[key][5];
      let charsId = charsData[key];
      let plottedBars = plotRatingToBar(convertedRating, dummyBar);
      let aDummySet =
        <div id="characteristic-breakdown-bar" key={index}>
          {key} <br />
          <span> {plottedBars[0]} {plottedBars[1]} {plottedBars[2]} </span>
          <br />
          <span style={{marginRight: '1.8em'}}> {oneValue} </span>
          <span style={{marginRight: '2em'}}> {threeValue} </span>
          <span> {fiveValue} </span>
          <br />
          <br />
        </div>;
      breakdownSet.push(aDummySet);
    })
    return breakdownSet;
  };

  const breakdownBars = formatData(data);

  return (
    <div className="product-breakdown">
      {breakdownBars.map(b => {
        return b;
      })}
    </div>
  );
};

export default ProductBreakdown;