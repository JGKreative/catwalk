import React from 'react';
import _ from 'underscore';
import Answer from './Answer';

const AnswersList = ({ answers }) => (
  <div>
    {_.map(answers, (answer) => (
      <Answer answer={answer} key={answer.id} />
    ))}
  </div>
);

export default AnswersList;
