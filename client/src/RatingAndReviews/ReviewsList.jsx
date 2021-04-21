import React, { useState } from 'react';
import Review from './Review.jsx';

const ReviewsList = () => {

  return (

    <div className="ReviewsList">
      <Review />
      <Review />
      <button>See More</button>
      <button>Add Review</button>
    </div>

  );
}

export default ReviewsList;