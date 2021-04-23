import React, { useState } from 'react';

/* eslint-disable */

const Review = ({ data }) => {

  return (

    <div className="Review">
      <div className="Stars-User-DateOfReview-TopBar">
        <div> - - - - -- - - - - - - - - - - - - - - - - - - - - - </div>
        <span> * * * * * </span>
        <span>(---Blank ----Space-----Here---)</span>
        <span> {data.reviewer_name} </span>
        <span> {data.date} </span>
      </div>
      <div className="ReviewBody">
        <h3> {data.summary} </h3>
        <p> ...word-break truncation of summary (if needed) </p>
        <br />
        <p> {data.body} </p>
      </div>
      <div> - - - - -- - - - - - - - - - - - - - - - - - - - - - </div>
    </div>

  );
}

export default Review;