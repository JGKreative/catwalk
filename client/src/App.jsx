import React from 'react';
<<<<<<< Updated upstream

import OverviewContainer from './overviewComponents/OverviewContainer';
import QnA from './qaComponents/QnAParentComp';
=======
import OverviewContainer from './overviewComponents/OverviewContainer';
// import QnA from './qaComponents/QnAParentComp';
// import QnA from './qaComponents/QnAParentComp';
>>>>>>> Stashed changes
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
