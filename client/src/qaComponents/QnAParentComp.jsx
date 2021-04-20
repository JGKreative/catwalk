import React from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';

// import PropTypes from 'prop-types';

const QnAParentComp = () => (
  <div>
    Questions:
    <SearchBar />
    <QuestionsList />
    <div>Add some buttons</div>
    <div>And some more buttons</div>
  </div>
);

// qaParentComp.propTypes = {
// };

export default QnAParentComp;
