import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import AnswersList from './AnswersList';
import Helpfulness from './Helpfulness';
import NewQAForm from './NewQAForm';
import { fetchAnswers } from './ApiController';
import centralState from '../appContext';

const Question = ({ question }) => {
  //----------------------------------------
  // Deconstruct Props:
  const {
    question_body: body,
    question_date: date,
    asker_name: askerName,
    answers,
    question_id: id,
    question_helpfulness: helpfulness,
  } = question;

  const { productDescription, productName } = centralState();

  //-----------------------------------------
  // State:
  const [allAnswers, setAllAnswers] = useState(answers);
  const [sortedAnswers, setSortedAnswers] = useState([]);
  const [displayAnswers, setDisplayAnswers] = useState([]);
  const [aDisplayMax, setADisplayMax] = useState(2);
  const [showAddA, setShowAddA] = useState(false);

  // ----------------------------------------
  // Helper Funcs:

  const toggleShowAddA = () => {
    setShowAddA(!showAddA);
  };

  const incrementADisplayMax = () => {
    setADisplayMax(aDisplayMax + 2);
  };

  const resetADisplayMax = () => {
    setADisplayMax(2);
  };

  const compareHelpfulness = (a, b) => {
    if (a.helpfulness < b.helpfulness) {
      return 1;
    }
    if (a.helpfulness > b.helpfulness) {
      return -1;
    }
    return 0;
  };

  const refreshOnSubmit = () => {
    fetchAnswers(id, setAllAnswers);
  };

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // ----------------------------------------
  // Effects:

  //   sort the answers by helpfulness
  useEffect(() => {
    let newSortedAnswers;
    if (Array.isArray(allAnswers)) {
      newSortedAnswers = allAnswers.slice().sort(compareHelpfulness);
    } else {
      newSortedAnswers = Object.values(answers).sort(compareHelpfulness);
    }
    setSortedAnswers(newSortedAnswers);
  }, [allAnswers]);

  //   display correct number of answers
  useEffect(() => {
    if (sortedAnswers.length) {
      const displayAs = sortedAnswers.slice(0, aDisplayMax);
      setDisplayAnswers(displayAs);
    }
  }, [sortedAnswers.length, aDisplayMax]);

  // ----------------------------------------
  // Rendering the  Component

  //   conditional sub-components
  const moreABtn = () => {
    if (displayAnswers.length < sortedAnswers.length) {
      return (
        <button type="button" onClick={incrementADisplayMax}>Show more answers</button>
      );
    }
    return (<div />);
  };

  const lessABtn = () => {
    if (displayAnswers.length > 2) {
      return (
        <button type="button" onClick={resetADisplayMax}>Show less answers</button>
      );
    }
    return (<div />);
  };

  //   the actual component
  return (
    <div style={{ background: 'WhiteSmoke', border: 'groove', borderRadius: '10px', borderRadius: '10px', padding: (30, 30, 20, 20) }}>
      <div>
        <h4>Q:</h4>
        {body}
      </div>
      <AnswersList answers={displayAnswers} />
      <button type="button" onClick={toggleShowAddA}>Add an answer</button>
      {moreABtn()}
      {lessABtn()}
      <br />
      <br />
      <span>{askerName}</span>
      {'   ||   '}
      <span>{formattedDate}</span>
      {'   ||   '}
      <Helpfulness parentId={id} parentType="questions" helpfulnessRank={helpfulness} updateQuestions={refreshOnSubmit} />
      <br />
      <ReactModal
        isOpen={showAddA}
        onRequestClose={toggleShowAddA}
        appElement={document.querySelector('#app')}
      >
        <h1>Submit your Answer</h1>
        <h3>
          About the
          {`Show Current Body and ${body} Change me once current product has a centralized state`}
        </h3>
        <button type="button" onClick={toggleShowAddA}>Go Back</button>
        <NewQAForm parentId={id} parentType="answers" closeOnSubmit={toggleShowAddA} updateQuestions={refreshOnSubmit} />
      </ReactModal>
    </div>
  );
};

export default Question;
