import React from 'react';

import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
// import QnAFillerDataUntilAPISetup from '../../test/QASpecs/testData';

const App = () => (
  <div>
    <OverviewContainer />
    <RatingsAndReviewsService />
    <QnA questionsData={QnAFillerDataUntilAPISetup} />
  </div>
);

export default App;
