import React from 'react';
import Review from './Review';


const ReviewsList = ({ data }) => {

  const reviews = data.map((review) => (
    <Review review={review} key={review.review_id} />
  ));

  return (

    <div className="ReviewsList">
      {/* <Review data={data[0]} />
      <Review data={data[1]} /> */}
      {reviews}
      <button className="more-reviews-btn"> See More </button>
      <button className="add-review-btn"> Add Review </button>
    </div>

  );
};

export default ReviewsList;

