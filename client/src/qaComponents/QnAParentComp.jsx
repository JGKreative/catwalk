import React, { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import NewQAForm from './NewQAForm';
import { fetchQuestions } from './ApiController';
import appContext from '../appContext';

const QnAParentComp = () => {
  const [allQuestions, setAllQuestions] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [displayAddQ, setDisplayAddQ] = useState(false);
  const currentProduct = useContext(appContext);

  const toggleDisplayAddQ = (event) => {
    event.preventDefault();
    setDisplayAddQ(!displayAddQ);
  };

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

  useEffect(() => {
    updateQuestions(currentProduct);
  }, [currentProduct]);

  if (allQuestions === undefined) {
    return (
      <div>Retrieving Question Data.....</div>
    );
  }

  return (
    <div id="qna">
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
      <button type="button" onClick={toggleDisplayAddQ}>Ask A Question</button>
      <ReactModal
        isOpen={displayAddQ}
        onRequestClose={toggleDisplayAddQ}
        appElement={document.querySelector('#app')}
      >
        <h1>Ask Your Question</h1>
        <h3>
          About the
          {`${currentProduct} Change me once current product has a centralized state`}
        </h3>
        <NewQAForm parentId={currentProduct} parentType="question" closeOnSubmit={toggleDisplayAddQ} updateQuestions={() => { updateQuestions(currentProduct); }} />
        <button type="button" onClick={toggleDisplayAddQ}>Go Back</button>
      </ReactModal>
      <button type="button">Show more questions</button>
    </div>
  );
};

export default QnAParentComp;
