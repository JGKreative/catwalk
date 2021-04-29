import React from 'react';
import StarRating from './StarRating';
import { calculateAvgRating, calculateAvgRecommended } from './helperFunctions';
import Breakdown from './Breakdown';

const RatingsBreakdown = ({ data }) => {
  const ratings = data.ratings;
  const recommended = data.recommended;
  const characteristics = data.characteristics;
  console.log('recommended:', recommended);
  console.log('characteristics:', characteristics);

  const averageRating = calculateAvgRating(ratings);
  const averageRecommended = calculateAvgRecommended(recommended);

  return (
    <div className="ratings-breakdown-main">
      <h3> {"Ratings & Reviews"} </h3>
      <div>
        <span style={{fontWeight: 'bold', fontSize: '3em'}}> {averageRating} </span>
        <span>
          <StarRating rating={averageRating} />
        </span>
      </div>
      <Breakdown />
      <div>
      {averageRecommended}% of reviews recommend this product
      </div>
      <div>_____________________________</div>
    </div>

  );
};

export default RatingsBreakdown;
