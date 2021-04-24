import React, { useState } from 'react'

const StarRating = ({ rating }) => {

  const [reviewRating, setreviewRating] = useState(rating);

  const empty = <ion-icon name="star-outline"></ion-icon>;
  const half = <ion-icon name="star-half"></ion-icon>;
  const full = <ion-icon name="star"></ion-icon>;

  const zero = <span>{empty}{empty}{empty}{empty}{empty}</span>
  const zeroHalf = <span>{half}{empty}{empty}{empty}{empty}</span>
  const one = <span>{full}{empty}{empty}{empty}{empty}</span>
  const oneHalf = <span>{full}{half}{empty}{empty}{empty}</span>
  const two = <span>{full}{full}{empty}{empty}{empty}</span>
  const twoHalf = <span>{full}{full}{half}{empty}{empty}</span>
  const three = <span>{full}{full}{full}{empty}{empty}</span>
  const threeHalf = <span>{full}{full}{full}{half}{empty}</span>
  const four = <span>{full}{full}{full}{empty}{empty}</span>
  const fourHalf = <span>{full}{full}{full}{full}{half}</span>
  const five = <span>{full}{full}{full}{full}{full}</span>

  // const starOptions = [zero, zeroHalf, one, oneHalf, two, twoHalf, three, threeHalf, four, fourHalf, five];

  const displayReviewRating = (reviewRating) => {
    if (reviewRating < 0.5 ) {
      return zero;
    } else if (reviewRating < 1) {
      return zeroHalf;
    } else if (reviewRating < 1.5) {
      return one;
    } else if (reviewRating < 2) {
      return oneHalf;
    } else if (reviewRating < 2.5) {
      return two;
    } else if (reviewRating < 3) {
      return twoHalf;
    } else if (reviewRating < 3.5) {
      return three;
    } else if (reviewRating < 4) {
      return threeHalf;
    } else if (reviewRating < 4.5) {
      return four;
    } else if (reviewRating < 5) {
      return fourHalf;
    } else {
      return five;
    }
  }

  let reviewRating = displayReviewRating(reviewRating);

  return (
    <span>
      {reviewRating}
    </span>
  );
};

export default StarRating;

// empty star = <ion-icon name="star-outline"></ion-icon>
// half star = <ion-icon name="star-half"></ion-icon>
// full star = <ion-icon name="star"></ion-icon>
