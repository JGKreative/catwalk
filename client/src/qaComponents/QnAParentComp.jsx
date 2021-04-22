import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import testData from '../../../test/QASpecs/testData';

const QnAParentComp = () => {
  const [questionsData, setQuestionsData] = useState(testData.results);
  console.log('q data', questionsData);
  return (
    <div>
      Questions:
      <SearchBar />
      <QuestionsList questions={questionsData} />
      <button type="button">Ask a question</button>
      <button type="button">Show more questions</button>
    </div>
  );
};

export default QnAParentComp;
