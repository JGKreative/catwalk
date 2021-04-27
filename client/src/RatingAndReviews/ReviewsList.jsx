import React, { useState } from 'react';
import Review from './Review';

const ReviewsList = ({ data }) => {
  const reviews = data.map((review) => (
    <Review review={review} key={review.review_id} rating={review.rating} />
  ));

  const [reviewsShowing, setReviewsShowing] = useState(2);
  const displayReviews = reviews.slice(0, reviewsShowing);

  const seeMoreButton = data.length > 2 && reviewsShowing < data.length ?
    <button className="more-reviews-btn" onClick={() => setReviewsShowing(reviewsShowing + 2)} > See More </button> :
    null;

  return (

    <div className="ReviewsList">
      {displayReviews}
      {seeMoreButton}
      <button className="add-review-btn"> Add Review + </button>
    </div>

  );
};

export default ReviewsList;
