import React from 'react';

const ReviewStars = () => (
  // display stars according to review score (found in database)
  // grab icons (https://fonts.google.com/icons) and change below class names accordingly
  <div>
    <span className="star" />
    <span className="star" />
    <span className="star" />
    <span className="star-half" />
    <span className="star-empty" />
  </div>
);

export default ReviewStars;
