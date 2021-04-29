import React from 'react';
import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';

const App = () => (
  <div id="app">
    <OverviewContainer />
    <RatingsAndReviewsService />
    <QnA />
  </div>
);

export default App;
