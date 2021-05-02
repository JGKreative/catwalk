import React, { useState } from 'react';
import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
import { appContext } from './appContext';

const App = () => {
  const [productId, changeProductId] = useState(20101);
  const [productName, setProductName] = useState('[Current Product Name Here]');
  const [productDescription, setProductDescription] = useState('[Current Product Description Here]');

  const testUpdate = () => {
    changeProductId(productId + 1);
  };
  console.log('--------Current Product ID is:', productId, '------------');

  const contextExport = {
    productId,
    productName,
    productDescription,
  };

  return (
    <appContext.Provider value={contextExport} id="app">
      <button type="button" onClick={testUpdate}>Test Current Product Change</button>
      {/* <OverviewContainer /> */}
      <RatingsAndReviewsService />
      <QnA />
    </appContext.Provider>
  );
};

export default App;
