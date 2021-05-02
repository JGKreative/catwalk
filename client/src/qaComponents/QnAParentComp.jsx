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

  //   initial rendering of the current product
  useEffect(() => {
    fetchQuestions(productId, initialize, 4);
  }, [productId]);

  //   show correct # of questions if not searching
  useEffect(() => {
    if (allQuestions && !displaySearchResults) {
      const displayQs = allQuestions.slice(0, qDisplayMax);
      setDisplayQuestions(displayQs);
    }
  }, [allQuestions, displaySearchResults, qDisplayMax]);

  //   show search results
  useEffect(() => {
    if (displaySearchResults) {
      const newDisplay = allQuestions.slice().filter(searchTermMatch);
      setDisplayQuestions(newDisplay);
    }
  }, [displaySearchResults, allQuestions]);

  //---------------------------------------------------------
  // Rendering the component:

  //   conditional sub-components
  const moreQBtn = () => {
    if (displayQuestions.length < allQuestions.length && !displaySearchResults) {
      return (
        <button type="button" onClick={incrementQDisplayMax} style={btnStyle}>Show more questions</button>
      );
    }
    return (<div />);
  };

  const btnStyle = { padding:'5px', background:'lightGrey', fontSize:'large'}

  const lessQBtn = () => {
    if (displayQuestions.length > 4) {
      return (
        <button type="button" onClick={resetQDisplayMax} style={btnStyle}>Show less questions</button>
      );
    }
    return (<div />);
  };
  if (!allQuestions || !allQuestions.length) {
    return (
    <div id="qna" style={{ maxHeight: '90%', heigth: '50%', maxWidth: '60%', width: '60%', margin: 'auto' }}>
      <h1>Questions</h1>
        <h3>
         Ask the First Question About {productName} :
        </h3>
      <NewQAForm parentId={productId} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={updateQuestions} />
    </div>
);
  }
  // if (allQuestions && !allQuestions.length) {
  //   return (
  //     <NewQAForm parentId={productId} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={updateQuestions} />
  //   );
  // }
  //   the actual component

  return (
    <div id="qna" style={{ maxHeight: '90%', heigth: '50%', maxWidth: '60%', margin: 'auto' }}>
      <h2>Questions:</h2>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <QuestionsList questions={displayQuestions} />
      <ReactModal
        isOpen={displayAddQ}
        onRequestClose={toggleDisplayAddQ}
        appElement={document.querySelector('#app')}
        style={{overlay: {maxHeight: '70%', height: '60%', maxWidth: '50%', margin:'auto'}}}
      >
        <h1>Ask Your Question</h1>
        <h3>
          About {productName} :
        </h3>
        <NewQAForm parentId={productId} parentType="questions" closeOnSubmit={toggleDisplayAddQ} updateQuestions={updateQuestions} />
        <br />
        <button type="button" onClick={toggleDisplayAddQ}>Go Back</button>
      </ReactModal>
      <div>
        <span style={{ float: 'left', paddingLeft: '10%' }}>
          <button type="button" onClick={toggleDisplayAddQ} style={btnStyle}>Ask A Question</button>
        </span>
        <span style={{ float: 'right', paddingRight: '20%' }}>
          {lessQBtn()}
          {moreQBtn()}
          <br />
          <br />
        </span>
      </div>
    </div>
  );
};

export default QnAParentComp;
