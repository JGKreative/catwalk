import React from 'react';
import StarRating from './StarRating';
import { calculateAvgRating } from './helperFunctions';

const RatingsBreakdown = ({ data }) => {
  const ratings = data.ratings;
  const recommended = data.recommended;
  const characteristics = data.characteristics;
  console.log('ratings:', ratings);
  console.log('recommended:', recommended);
  console.log('characteristics:', characteristics);

  const rating = calculateAvgRating(ratings)
  console.log('rating:', rating)


  return (
    <div className="ratings-breakdown-main">
      <h3> {"Ratings & Reviews"} </h3>
      <div>
        GIANT NUMBER
        <span> <StarRating rating={rating} /> </span>
      </div>
      <div>_____________________________</div>
    </div>

  );
};

export default RatingsBreakdown;
