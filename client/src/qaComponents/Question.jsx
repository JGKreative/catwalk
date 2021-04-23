import React from 'react';
import AnswersList from './AnswersList';

const Question = ({ question }) => {
  const {
    question_body: body, question_date: date, asker_name: askerName, answers,
  } = question;

  return (
    <div>
      Q:
      <span>{body}</span>
      <span>{date}</span>
      <span>{askerName}</span>
      <AnswersList answers={answers} />
      <button type="button">Add an answer</button>
      <button type="button">Show more answers</button>
    </div>
  );
};

export default Question;
