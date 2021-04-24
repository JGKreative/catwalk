import React from 'react';
import Review from './Review';

const ReviewsList = ({ data }) => {

  const reviews = data.map((review) => (
    <Review review={review} key={review.review_id} rating={review.rating} />
  ));

  return (

    <div className="ReviewsList">
      {reviews}
      <button className="more-reviews-btn"> See More </button>
      <button className="add-review-btn"> Add Review </button>
    </div>

  );
};

export default ReviewsList;
