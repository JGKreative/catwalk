import React, { useState } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';
import RatingsWrapper from './RatingsWrapper';
import ReviewForm from './AddReviewForm';
import ReactModal from 'react-modal';

import data from './fakeData';
const reviewsData = data.reviewsForProductId20101.results;
const metaData = data.metaDataForProductId20100;

const RatingsAndReviewsService = () => {
  const [ratings, setRatings] = useState(metaData);
  const [reviews, setReviews] = useState(reviewsData);
  const [sortedBy, setSortedBy] = useState('helpfulness');
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="RnR-Main">

      <RatingsWrapper data={ratings} />
      <SortOptions data={reviews} setSorted={setSortedBy} />
      <ReviewsList data={reviews} sortBy={sortedBy} toggleModal={toggleModal} />
      <ReactModal
        isOpen={displayModal}
        onRequestClose={toggleModal}
        appElement={document.querySelector('#app')}
      >
        <ReviewForm />
        <button onClick={toggleModal}>Go Back</button>
      </ReactModal>
    </div>
  );
};

export default RatingsAndReviewsService;

