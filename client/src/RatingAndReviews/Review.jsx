import React, { useState } from 'react';

/* eslint-disable */

const Review = ({ review }) => {

  const [recommended, setRecommended] = useState(review.recommend);

  let recommend = recommended ? <div><span>&#10003;</span> I recommend this product! </div> : <div></div>

  return (

    <div className="Review">
      <div className="Stars-User-DateOfReview-TopBar">
        <div> - - - - -- - - - -{review.review_id} - - - - - - - - - - - - - - - - - </div>
        <span> * * * * * </span>
        <span> {" - - - - - - - - "} </span>
        <span> {review.reviewer_name} </span>
        <span> {review.date} </span>
      </div>
      <div className="ReviewBody">
        <h3> {review.summary} </h3>
        <p> ...word-break truncation of summary (if needed) </p>
        <br />
        <p> {review.body} </p>
        {recommend}
        <div></div>
      </div>
      <div> - - - - -- - - - - - - - - - - - - - - - - - - - - - </div>
    </div>

  );
}

export default Review;