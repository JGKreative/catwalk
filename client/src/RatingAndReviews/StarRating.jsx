import React, { useState } from 'react';

const StarRating = ({ rating }) => {

  const [starRating, setStarRating] = useState(rating);

  const empty = <ion-icon name="star-outline" />;
  const half = <ion-icon name="star-half" />;
  const full = <ion-icon name="star" />;

  const zero = <span>{empty}{empty}{empty}{empty}{empty}</span>;
  const zeroHalf = <span>{half}{empty}{empty}{empty}{empty}</span>;
  const one = <span>{full}{empty}{empty}{empty}{empty}</span>;
  const oneHalf = <span>{full}{half}{empty}{empty}{empty}</span>;
  const two = <span>{full}{full}{empty}{empty}{empty}</span>;
  const twoHalf = <span>{full}{full}{half}{empty}{empty}</span>;
  const three = <span>{full}{full}{full}{empty}{empty}</span>;
  const threeHalf = <span>{full}{full}{full}{half}{empty}</span>;
  const four = <span>{full}{full}{full}{full}{empty}</span>;
  const fourHalf = <span>{full}{full}{full}{full}{half}</span>;
  const five = <span>{full}{full}{full}{full}{full}</span>;

  const starsToDisplay = (rating) => {
    if (rating < 0.5) {
      return zero;
    } else if (rating < 1) {
      return zeroHalf;
    } else if (rating < 1.5) {
      return one;
    } else if (rating < 2) {
      return oneHalf;
    } else if (rating < 2.5) {
      return two;
    } else if (rating < 3) {
      return twoHalf;
    } else if (rating < 3.5) {
      return three;
    } else if (rating < 4) {
      return threeHalf;
    } else if (rating < 4.5) {
      return four;
    } else if (rating < 5) {
      return fourHalf;
    } else {
      return five;
    }
  };

  const displayRating = starsToDisplay(starRating);

  return (
    <span>
      {displayRating}
    </span>
  );
};

export default StarRating;
