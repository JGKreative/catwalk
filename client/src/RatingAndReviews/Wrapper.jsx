import React, { useState } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;

const RatingsAndReviewsService = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [sortedBy, setSortedBy] = useState('helpfulness');
  console.log('sortedBy: ', sortedBy)

  return (
    <div className="RnR-Main">
      <SortOptions data={reviews} setSorted={setSortedBy} />
      <ReviewsList data={reviews} sortBy={sortedBy} />
    </div>
  );
};

export default RatingsAndReviewsService;

