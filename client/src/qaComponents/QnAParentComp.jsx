import React, { useState, useEffect } from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import fetchQuestions from './ApiController.js';

const QnAParentComp = () => {
  const [allQuestions, setAllQuestions] = useState();
  const [currentProduct, changeCurrentProduct] = useState(20100);

  const updateQuestions = (productId) => {
    fetchQuestions(productId, setAllQuestions);
  };

  useEffect(() => {
    updateQuestions(currentProduct);
  }, [currentProduct]);

  if (allQuestions === undefined) {
    return (
      <div>Retrieving Question Data.....</div>
    );
  }

  const testUpdate = () => {
    changeCurrentProduct(20101);
  };

  return (
    <div>
      Questions:
      <SearchBar />
      <QuestionsList questions={allQuestions} />
      <button type="button">Ask a question</button>
      <button type="button">Show more questions</button>
      <button type="button" onClick={testUpdate}>TEMP BUTTON to test Update!!!</button>
    </div>
  );
};

export default QnAParentComp;
