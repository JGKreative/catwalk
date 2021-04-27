import React, { useState, useEffect, createContext } from 'react';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import fetchQuestions from './ApiController';

const QnAParentComp = () => {
  const [allQuestions, setAllQuestions] = useState();
  const [currentProduct, changeCurrentProduct] = useState(20100);
  const [searchTerm, setSearchTerm] = useState('');
  const [displaySearchResults, setDisplaySearchResults] = useState(false);

  const updateQuestions = (productId) => {
    fetchQuestions(productId, setAllQuestions);
  };

  const toggleDisplaySearchResults = () => {
    setDisplaySearchResults(!displaySearchResults);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    toggleDisplaySearchResults();
    setSearchTerm('');
    const questionBodyMatch = ({ question_body: question }) => {
      const lowerCSearch = searchTerm.toLowerCase();
      const lowerCBody = question.toLowerCase();
      return (lowerCBody.includes(lowerCSearch));
    };
    const newDisplay = allQuestions.slice().filter(questionBodyMatch);
    setAllQuestions(newDisplay);
  };

  const testUpdate = () => {
    changeCurrentProduct(20101);
  };

  useEffect(() => {
    updateQuestions(currentProduct);
  }, [currentProduct]);

  if (allQuestions === undefined) {
    return (
      <div>Retrieving Question Data.....</div>
    );
  }

  return (

    <div>
      Questions:
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        submitSearch={submitSearch}
        displayResults={displaySearchResults}
        toggleResults={toggleDisplaySearchResults}
        refreshQuestions={() => { updateQuestions(currentProduct); }}
      />
      <QuestionsList questions={allQuestions} />
      <button type="button">Ask a question</button>
      <button type="button">Show more questions</button>
      <button type="button" onClick={testUpdate}>TEMP BUTTON to test Update!!!</button>
    </div>
  );
};

export default QnAParentComp;
