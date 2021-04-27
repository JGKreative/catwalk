import React, { useState } from 'react';
import ReviewsList from './ReviewsList';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;

const RatingsAndReviewsService = () => {
  const [reviews, setReviews] = useState(reviewsData);

  return (
    <div className="RnR-Main">
      <ReviewsList data={reviews} />
    </div>
  );
};

export default RatingsAndReviewsService;

