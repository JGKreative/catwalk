import React from 'react';
import StarRating from './StarRating';
import { calculateAvgRating } from './helperFunctions';
import Breakdown from './Breakdown';

const RatingsBreakdown = ({ data }) => {
  const ratings = data.ratings;
  const recommended = data.recommended;
  const characteristics = data.characteristics;
  console.log('recommended:', recommended);
  console.log('characteristics:', characteristics);

  const averageRating = calculateAvgRating(ratings)

  return (
    <div className="ratings-breakdown-main">
      <h3> {"Ratings & Reviews"} </h3>
      <div>
        <span style={{fontWeight: 'bold', fontSize: '3em'}}> {averageRating} </span>
        <span>
          <StarRating rating={averageRating} />
        </span>
      </div>
      <p> Rating Breakdown: </p>
      <Breakdown />
      <div>_____________________________</div>
    </div>

  );
};

export default RatingsBreakdown;
