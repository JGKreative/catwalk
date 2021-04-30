import React, { useState } from 'react';
import Review from './Review';
import { sortByHelpful, sortByNewest, sortByRelevant } from './helperFunctions';

const ReviewsList = ({ data, sortBy, toggleModal }) => {

  const reviews = data.map((review) => (
    <Review review={review} key={review.review_id} rating={review.rating} />
  ));

  let sortedReviews;
  // if (sortBy === 'relevance') {

  // }
  if (sortBy === 'newest') {
    sortedReviews  = sortByNewest(reviews);
  }
  if (sortBy === 'helpfulness') {
    sortedReviews = sortByHelpful(reviews);
  };
  // sortedReviews.forEach(r => {
  //   console.log(r.props.review.date)});


  const [reviewsShowing, setReviewsShowing] = useState(2);
  const displayReviews = sortedReviews.slice(0, reviewsShowing);

  const seeMoreButton = data.length > 2 && reviewsShowing < data.length ?
    <button className="more-reviews-btn" onClick={() => setReviewsShowing(reviewsShowing + 2)} > See More </button> :
    null;

  return (

    <div className="ReviewsList">
      {displayReviews}
      {seeMoreButton}
      <button className="add-review-btn" onClick={toggleModal}> Add Review + </button>
    </div>

  );
};

export default ReviewsList;
