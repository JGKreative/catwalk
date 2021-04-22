import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import testData from '../../../test/QASpecs/testData';

const QnAParentComp = () => {
  const [questionsData, setQuestionsData] = useState(testData);

  return (
    <qaDataContext.Provider>
      Questions:
      <SearchBar />
      <QuestionsList questions={questionsData} />
      <button type="button">Ask a question</button>
      <button type="button">Show more questions</button>
    </qaDataContext.Provider>
  );
};

export default QnAParentComp;

