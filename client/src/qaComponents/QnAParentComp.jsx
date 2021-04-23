import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';

const QnAParentComp = ({ questionsData }) => {
  const [allQuestions, setAllQuestions] = useState(questionsData.results);
  return (
    <div>
      Questions:
      <SearchBar />
      <QuestionsList questions={allQuestions} />
      <button type="button">Ask a question</button>
      <button type="button">Show more questions</button>
    </div>
  );
};

export default QnAParentComp;
