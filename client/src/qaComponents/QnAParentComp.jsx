import React from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';

const QnAParentComp = () => (
  <div>
    Questions:
    <SearchBar />
    <QuestionsList />
    <button type="button">Ask a question</button>
    <button type="button">Show more questions</button>
  </div>
);

export default QnAParentComp;
