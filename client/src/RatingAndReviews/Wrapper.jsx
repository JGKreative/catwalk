import React, { useState } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;

const RatingsAndReviewsService = () => {
  const [reviews, setReviews] = useState(reviewsData);

  return (
    <div className="RnR-Main">
      <SortOptions data={reviews} />
      <ReviewsList data={reviews} />
    </div>
  );
};

export default RatingsAndReviewsService;

