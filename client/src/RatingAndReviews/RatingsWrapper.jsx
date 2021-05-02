import React, { useState } from 'react';
import StarRating from './StarRating';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';
import { calculateAvgRating, calculateAvgRecommended } from './helperFunctions';


const RatingsWrapper = ({ data }) => {
  const [ratingsFound, setRatingsFound] = useState(true);
  const ratings = data.ratings;
  const recommended = data.recommended;
  const characteristics = data.characteristics;
  const averageRating = ratingsFound ? calculateAvgRating(ratings) : 0;
  const averageRecommended = calculateAvgRecommended(recommended);
  const renderAverageRecommended = averageRecommended === 0 ? 'There are no reviews for this product' : `${averageRecommended}% of reviews recommend this product`;


  return (
    <div className="ratings-breakdown-main">
      <h3> {"Ratings & Reviews"} </h3>
      <div id="average-rating">
        <span style={{ fontWeight: 'bold', fontSize: '3em' }}> {averageRating} </span>
        <span>
          <StarRating rating={averageRating} />
        </span>
      </div>
      <RatingsBreakdown ratings={ratings} />
      <div id="average-recommended">
        {renderAverageRecommended}
      </div>
      <br />
      <ProductBreakdown data={characteristics} />
      <div>_____________________________</div>
    </div>

  );
};

export default RatingsWrapper;
