import React from 'react';
import AnswersList from './AnswersList';

const Question = ({
  body, date, askerName, answers,
}) => (
  <div>
    <div>{body}</div>
    <div>{date}</div>
    <div>{askerName}</div>
    <AnswersList answers={answers} />
    <div>add some buttons</div>
  </div>
);

export default Question;
