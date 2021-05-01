import React from 'react';
import Answer from './Answer';

const AnswersList = ({ answers }) => (
  <div>
    {answers.map((answer) => (
      <Answer answer={answer} key={answer.id} />
    ))}
  </div>
);

export default AnswersList;
