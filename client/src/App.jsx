import React, { useState, useEffect } from 'react';
import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
import { appContext } from './appContext';

const App = () => {
  const urlProductId = Number(window.location.pathname.split('/')[1]);
  const [productId, changeProductId] = useState(urlProductId || 20100);
  const [productName, setProductName] = useState('[Current Product Name Here]');
  const [productDescription, setProductDescription] = useState('[Current Product Description Here]');

  const testUpdate = () => {
    const nextProductId = urlProductId + 1;
    const nextProductIdStr = nextProductId.toString();
    const nextProductUrl = window.location.origin.concat(`/${nextProductIdStr}`);
    if (!urlProductId) {
      window.parent.location = window.location.origin.concat('/20101');
    } else {
      window.parent.location = nextProductUrl;
    }
  };

  const contextExport = {
    productId,
    productName,
    productDescription,
  };

  useEffect(() => {
    if (urlProductId) {
      changeProductId(urlProductId);
    }
  }, [urlProductId]);

  const wetTestBtnStyle = {
    margin: '0 auto',
    display: 'block',
    padding: '25px',
    background: 'silver',
    fontSize: 'large',
    border: 'groove',
    borderRadius: '30px',
  };

  return (
    <appContext.Provider value={contextExport} id="app">
      <div>
        <button type="button" onClick={testUpdate} style={wetTestBtnStyle}>🐈🐈  Can haz next product plz?  🐈🐈</button>
        <OverviewContainer />
        <RatingsAndReviewsService />
        <QnA />
      </div>
    </appContext.Provider>
  );
};

export default App;
