import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import NewQAForm from './NewQAForm';
import { fetchQuestions } from './ApiController';
import centralState from '../appContext';

const QnAParentComp = () => {
  //--------------------------------------------------
  // State:
  const [allQuestions, setAllQuestions] = useState();
  const [qDisplayMax, setQDisplayMax] = useState(4);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayAddQ, setDisplayAddQ] = useState(false);
  const { productId, productName, productDescription } = centralState();

  const displaySearchResults = (searchTerm.length >= 3);

  //-----------------------------------------------------------------
  // Helper Funcs
  const searchTermMatch = ({ question_body: question }) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const lowerCaseQuestion = question.toLowerCase();
    return (lowerCaseQuestion.includes(lowerCaseSearch));
  };

  const toggleDisplayAddQ = () => {
    setDisplayAddQ(!displayAddQ);
  };

  const incrementQDisplayMax = () => {
    setQDisplayMax(qDisplayMax + 2);
  };

  const resetQDisplayMax = () => {
    setQDisplayMax(4);
  };

  const updateQuestions = () => {
    fetchQuestions(productId, setAllQuestions);
  };

  const initialize = (incomingQs) => {
    setAllQuestions(incomingQs);
    if (incomingQs.length === 4) {
      updateQuestions();
    }
  };

  //-------------------------------------------------------
  // Effects:

  // initial rendering of the current product
  useEffect(() => {
    fetchQuestions(productId, initialize, 4);
  }, [productId]);

  // show correct # of questions if not searching
  useEffect(() => {
    if (allQuestions && !displaySearchResults) {
      const displayQs = allQuestions.slice(0, qDisplayMax);
      setDisplayQuestions(displayQs);
    }
  }, [allQuestions, displaySearchResults, qDisplayMax]);

  // show search results
  useEffect(() => {
    if (displaySearchResults) {
      const newDisplay = allQuestions.slice().filter(searchTermMatch);
      setDisplayQuestions(newDisplay);
    }
  }, [displaySearchResults, allQuestions]);

  //---------------------------------------------------------
  // Rendering the component

  const moreQBtn = () => {
    if (displayQuestions.length < allQuestions.length && !displaySearchResults) {
      return (
        <button type="button" onClick={incrementQDisplayMax}>Show more questions</button>
      );
    }
    return (<div />);
  };

  const collapseQListBtn = () => {
    if (displayQuestions.length > 4) {
      return (
        <button type="button" onClick={resetQDisplayMax}>Show less questions</button>
      );
    }
    return (<div />);
  };

  if (!allQuestions) {
    return (
      <NewQAForm parentId={productId} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={updateQuestions} />
    );
  }

  return (
    <div id="qna">
      Questions:
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <QuestionsList questions={displayQuestions} />
      <button type="button" onClick={toggleDisplayAddQ}>Ask A Question</button>
      <ReactModal
        isOpen={displayAddQ}
        onRequestClose={toggleDisplayAddQ}
        appElement={document.querySelector('#app')}
      >
        <h1>Ask Your Question</h1>
        <h3>
          About the
          {`${productId} Change me once current product has a centralized state`}
        </h3>
        <NewQAForm parentId={productId} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={updateQuestions} />
        <button type="button" onClick={toggleDisplayAddQ}>Go Back</button>
      </ReactModal>
      {moreQBtn()}
      {collapseQListBtn()}
    </div>
  );
};

export default QnAParentComp;
