import React, { useState } from 'react';

const Review = () => {

  return (

    <div className="Review">
      <div className="Stars-User-DateOfReview-TopBar">
        <div> - - - - -- - - - - - - - - - - - - - - - - - - - - - </div>
        <span> * * * * * </span>
        <span>(---Blank ----Space-----Here---)</span>
        <span> UserNameGoesHere </span>
        <span> April 20, 2021 </span>
      </div>
      <div className="ReviewBody">
        <h3> I am a a review title that will have word-break... </h3>
        <p> ...truncation - eventually </p>
        <br />
        <p> And I am the body of the review which has no less than 50chars to be accepted </p>
      </div>
      <div> - - - - -- - - - - - - - - - - - - - - - - - - - - - </div>
    </div>

  );
}

export default Review;