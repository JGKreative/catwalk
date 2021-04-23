import React from 'react';
import QnA from './qaComponents/QnAParentComp';
import RatingsAndReviewsService from './RatingAndReviews/Wrapper';
import QnAFillerDataUntilAPISetup from '../../test/QASpecs/testData';

const App = () => (
  <div>
    <RatingsAndReviewsService />
    <QnA questionsData={QnAFillerDataUntilAPISetup} />
  </div>
);

export default App;
