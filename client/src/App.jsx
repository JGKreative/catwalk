import React, { useState, useEffect } from 'react';
import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
import { appContext } from './appContext';

const App = () => {
  const urlProductId = window.location.pathname.split('/')[1];
  const [productId, changeProductId] = useState(urlProductId || 20100);
  const [productName, setProductName] = useState('[Current Product Name Here]');
  const [productDescription, setProductDescription] = useState('[Current Product Description Here]');

  const testUpdate = () => {
    const nextProductId = (Number(urlProductId) + 1);
    const nextProductIdStr = nextProductId.toString();
    const nextProductUrl = window.location.origin.concat(`/${nextProductIdStr}`);
    window.parent.location = nextProductUrl;
  };
  console.log('--------Current Product ID is:', productId, '------------');

  const contextExport = {
    productId,
    productName,
    productDescription,
  };


  useEffect(() => {
    if (urlProductId) {
      changeProductId(window.location.pathname.split('/')[1]);
    }
  }, [urlProductId]);

  return (
    <appContext.Provider value={contextExport} id="app">
      <button type="button" onClick={testUpdate}>🐈🐈  Can haz next product plz?  🐈🐈</button>
      <OverviewContainer />
      <RatingsAndReviewsService />
      <QnA />
    </appContext.Provider>
  );
};

export default App;
