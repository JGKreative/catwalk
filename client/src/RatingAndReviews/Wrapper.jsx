import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';
import RatingsWrapper from './RatingsWrapper';
import ReviewForm from './AddReviewForm';
import ReactModal from 'react-modal';
import { getReviews, getReviewsMeta } from './ApiController';
import centralState from '../appContext';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;
const metaData = data.metaDataForProductId20101;

const RatingsAndReviewsService = () => {
  const [ratings, setRatings] = useState(metaData);
  const [reviews, setReviews] = useState(reviewsData);
  const [sortedBy, setSortedBy] = useState('helpfulness');
  const [displayModal, setDisplayModal] = useState(false);
  const { productId, productName, productDescription } = centralState();

  // helper functions:
  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  useEffect(() => {
    getReviews(productId, setReviews);
    getReviewsMeta(productId, setRatings);
  }, [productId]);

  return (
    <div className="RnR-Main" style={{
      display: 'flex', flexDirection: "row"
    }}>
      <div style={{ flexDirection: 'column', justifyContent: 'left' }} id="alignMeLeft">
        <RatingsWrapper data={ratings} />
      </div>
      <div style={{ flexDirection: 'column', justifyContent: 'right' }} id="alignMeRight">
        <SortOptions data={reviews} setSorted={setSortedBy} />
        <ReviewsList data={reviews} sortBy={sortedBy} toggleModal={toggleModal} />
      </div>
      <ReactModal
        isOpen={displayModal}
        onRequestClose={toggleModal}
        appElement={document.querySelector('#app')}
      >
        <ReviewForm />
        <button onClick={toggleModal}>Go Back</button>
      </ReactModal>
    </div >
  );
};

export default RatingsAndReviewsService;

