import React from 'react';
import Answer from './Answer';

const AnswersList = ({ answers }) => (
  <ul style={{ background: 'Gainsboro', border: 'ridge', borderRadius: '10px', padding: (30, 0, 30, 30), align: 'center', maxWidth: '70%' }}>
    A:
    <br />
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
    <br />
  </ul>
);

export default AnswersList;
