import React, { useState } from 'react';
import StarRating from './StarRating';
import Helpful from './Helpful';

/* eslint-disable */

const Review = ({ review, rating }) => {
  const [recommended, setRecommended] = useState(review.recommend);

  let recommend = recommended ? <div><span>&#10003;</span> I recommend this product! </div> : <div></div>

  var date = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (

    <div className="Review">
      <div className="Stars-User-DateOfReview-TopBar">
        <div> - - - - - - - - -{review.review_id} - - - - - - - - -</div>
        <StarRating rating={rating} />
        <span> {" - - - - - - - - "} </span>
        <span> {review.reviewer_name}, </span>
        <span>{" "}</span>
        <span> {date} </span>
      </div>
      <div className="ReviewBody">
        <h3> {review.summary} </h3>
        <br />
        <p> {review.body} </p>
        <div> {recommend} </div>
        <br/>
        <Helpful />
        <br/>
      </div>
    </div>

  );
}

export default Review;