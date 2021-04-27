import React from 'react';
import AnswersList from './AnswersList';
import Helpfulness from './Helpfulness';

const Question = ({ question }) => {
  const {
    question_body: body,
    question_date: date,
    asker_name: askerName,
    answers,
    question_id: id,
    question_helpfulness: helpfulness,
  } = question;

  return (
    <div>
      Q:
      <span>{body}</span>
      <span>{date}</span>
      <span>{askerName}</span>
      <Helpfulness parentId={id} parentType="question" helpfulnessRank={helpfulness} />
      <AnswersList answers={answers} />
      <button type="button">Add an answer</button>
      <button type="button">Show more answers</button>
    </div>
  );
};

export default Question;
