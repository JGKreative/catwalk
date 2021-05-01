import React, { useState } from 'react';
import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
import appContext from './appContext';

const App = () => {
  const [currentProduct, changeCurrentProduct] = useState(20101);
  const testUpdate = () => {
    changeCurrentProduct(currentProduct + 1);
  };
  console.log('--------Current Product is:', currentProduct, '------------');

  return (
    <appContext.Provider value={currentProduct} id="app">
      <button type="button" onClick={testUpdate}>Test Current Product Change</button>
      <OverviewContainer />
      <RatingsAndReviewsService />
      <QnA />
    </appContext.Provider>
  );
};

export default App;
