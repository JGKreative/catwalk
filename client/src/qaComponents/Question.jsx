import React, { useState } from 'react';
import ReactModal from 'react-modal';
import AnswersList from './AnswersList';
import Helpfulness from './Helpfulness';
import NewQAForm from './NewQAForm';

const Question = ({ question }) => {
  const {
    question_body: body,
    question_date: date,
    asker_name: askerName,
    answers,
    question_id: id,
    question_helpfulness: helpfulness,
  } = question;

  const [showAddA, setShowAddA] = useState(false);

  const toggleShowAddA = () => {
    setShowAddA(!showAddA);
  };

  return (
    <div>
      Q:
      <span>{body}</span>
      <span>{date}</span>
      <span>{askerName}</span>
      <Helpfulness parentId={id} parentType="question" helpfulnessRank={helpfulness} />
      <AnswersList answers={answers} />
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
        <NewQAForm parentId={id} parentType="Answer" />
        <button type="button" onClick={toggleShowAddA}>Go Back</button>
      </ReactModal>
      <button type="button" onClick={toggleShowAddA}>Add an answer</button>
      <button type="button">Show more answers</button>
    </div>
  );
};

export default Question;
