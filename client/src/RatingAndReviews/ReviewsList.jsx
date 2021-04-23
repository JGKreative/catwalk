import React, { useState } from 'react';
import Review from './Review';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20100.results;


const ReviewsList = () => {

  return (

    <div className="ReviewsList">
      <Review data={reviewsData[0]} />
      <Review data={reviewsData[1]} />
      <button>See More</button>
      <button>Add Review</button>
    </div>

  );
};

export default ReviewsList;

