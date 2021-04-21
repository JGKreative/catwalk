import React from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';

const QnAParentComp = () => (
  <div>
    Questions:
    <SearchBar />
    <QuestionsList />
    <div>Add some buttons</div>
    <div>And some more buttons</div>
  </div>
);

export default QnAParentComp;
