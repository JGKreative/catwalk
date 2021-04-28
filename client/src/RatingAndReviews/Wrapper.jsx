import React, { useState } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';
import RatingsBreakdown from './RatingsBreakdown';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;
const metaData = data.metaDataForProductId20101;

const RatingsAndReviewsService = () => {
  const [ratings, setRatings] = useState(metaData);
  const [reviews, setReviews] = useState(reviewsData);
  const [sortedBy, setSortedBy] = useState('helpfulness');

  return (
    <div className="RnR-Main">
      <RatingsBreakdown data={ratings} />
      <SortOptions data={reviews} setSorted={setSortedBy} />
      <ReviewsList data={reviews} sortBy={sortedBy} />
    </div>
  );
};

export default RatingsAndReviewsService;

