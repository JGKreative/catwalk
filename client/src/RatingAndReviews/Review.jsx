import React, { useState } from 'react';
import StarRating from './StarRating';
import Helpful from './Helpful';

/* eslint-disable */

const Review = ({ review, rating }) => {
  const [recommended, setRecommended] = useState(review.recommend);

  const recommend = recommended ?
    <div>
      <span>&#10003;</span>
      I recommend this product!
    </div> :
    null;

  const date = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  // console.log('PHOTOS', review.photos[0].url)

  const reviewPhotos = review.photos.map((img) => (
    <img style={{
      width: '150px',
      height: '150px',
      border: '1px solid black'
    }}
      src={img.url === undefined ? 'Image Not Found' : img.url}
      alt='Image Not Found'
      key={img.id} />
  ));

    let response;
    if (review.response !== null && review.response !== '') {
      response = <div style={{ backgroundColor: 'lightgray' }} >
      <p style={{ fontWeight: 'bold' }}> Response: </p>
      <p> {review.response} </p>
    </div>
    }


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
        <br />
        <div id="review-thumbnails"> {reviewPhotos} </div>
        <div> {recommend} </div>
        <br />
        {response}
        <br />
        <Helpful />
        <div>______________________________________________________________</div>
      </div>
    </div>

  );
}

export default Review;