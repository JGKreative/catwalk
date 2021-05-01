import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import AnswersList from './AnswersList';
import Helpfulness from './Helpfulness';
import NewQAForm from './NewQAForm';

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

  //-----------------------------------------
  // State:
  const [allAnswers, setAllAnswers] = useState([]);
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

  const tempFuncForPropDrilling = () => {
    console.log('create a QA context for API controls and add update answers req here to refresh after submit without needed to prop drill the func');
  };

  // ----------------------------------------
  // Effects:

  //   sort the answers by helpfulness
  useEffect(() => {
    const sortedAnswers = Object.values(answers).sort(compareHelpfulness);
    setAllAnswers(sortedAnswers);
  }, [answers]);

  //   display correct number of answers
  useEffect(() => {
    if (allAnswers) {
      const displayAs = allAnswers.slice(0, aDisplayMax);
      setDisplayAnswers(displayAs);
    }
  }, [allAnswers, aDisplayMax]);

  // ----------------------------------------
  // Rendering the  Component

  //   conditional sub-components
  const moreABtn = () => {
    if (displayAnswers.length < allAnswers.length) {
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
    <div>
      Q:
      <span>{body}</span>
      <span>{date}</span>
      <span>{askerName}</span>
      <Helpfulness parentId={id} parentType="questions" helpfulnessRank={helpfulness} />
      <AnswersList answers={displayAnswers} />
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
        <NewQAForm parentId={id} parentType="answers" closeOnSubmit={toggleShowAddA} updateQuestions={tempFuncForPropDrilling} />
        <button type="button" onClick={toggleShowAddA}>Go Back</button>
      </ReactModal>
      <button type="button" onClick={toggleShowAddA}>Add an answer</button>
      {moreABtn()}
      {lessABtn()}
    </div>
  );
};

export default Question;
