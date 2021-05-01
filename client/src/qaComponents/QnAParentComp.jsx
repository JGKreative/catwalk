import React, { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import QuestionsList from './QuestionsList';
import SearchBar from './SearchBar';
import NewQAForm from './NewQAForm';
import { fetchQuestions } from './ApiController';
import appContext from '../appContext';

const QnAParentComp = () => {
  //--------------------------------------------------
  // State:
  const [allQuestions, setAllQuestions] = useState();
  const [qNumToDisplay, setQNumToDisplay] = useState(4);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayAddQ, setDisplayAddQ] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const currentProduct = useContext(appContext);

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

  const updateQuestions = (productId, firstPull) => {
    fetchQuestions(productId, setAllQuestions, firstPull);
  };

  const initialize = (incomingQs) => {
    setAllQuestions(incomingQs);
    setInitializing(false);
  };

  //-------------------------------------------------------
  // Effects:

  // initial rendering of the current product
  useEffect(() => {
    fetchQuestions(currentProduct, initialize, initializing);
  }, [currentProduct]);

  // show correct # of questions if not searching
  useEffect(() => {
    if (allQuestions && searchTerm.length < 3) {
      const displayQs = allQuestions.slice(0, qNumToDisplay);
      setDisplayQuestions(displayQs);
    }
  }, [allQuestions, searchTerm]);

  // show search results
  useEffect(() => {
    if (searchTerm.length >= 3) {
      const newDisplay = allQuestions.slice().filter(searchTermMatch);
      setDisplayQuestions(newDisplay);
    }
  }, [searchTerm.length]);

  //---------------------------------------------------------
  // Rendering the component

  const moreQBtn = () => {
    // if there's more q's than are being displayed, return a btn to increase #
  };

  if (!allQuestions) {
    return (
      <div> </div>
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
          {`${currentProduct} Change me once current product has a centralized state`}
        </h3>
        <NewQAForm parentId={currentProduct} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={() => { updateQuestions(currentProduct); }} />
        <button type="button" onClick={toggleDisplayAddQ}>Go Back</button>
      </ReactModal>
      <button type="button">Show more questions</button>
    </div>
  );
};

export default QnAParentComp;
