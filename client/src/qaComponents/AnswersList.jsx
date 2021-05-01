import React from 'react';
import Answer from './Answer';

const AnswersList = ({ answers }) => (
  <div>
    {answers.map((answer) => {
      let key;
      if (answer.id) {
        key = answer.id;
      } else {
        key = answer.answer_id;
      }
      return (
        <Answer answer={answer} key={key} />
      );
    })}
  </div>
);

export default AnswersList;
