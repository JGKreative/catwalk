import React from 'react';
import _ from 'underscore';
import Answer from './Answer';

const compareHelpfulness = (a, b) => {
  if (a.helpfulness < b.helpfulness) {
    return 1;
  }
  if (a.helpfulness > b.helpfulness) {
    return -1;
  }
  return 0;
};

const AnswersList = ({ answers }) => {
  const answersArr = [];
  _.forEach(answers, (answer) => { answersArr.push(answer); });
  if (answersArr.length) {
    answersArr.sort(compareHelpfulness);
  }

  return (
    <div>
      {_.map(answersArr, (answer) => (
        <Answer answer={answer} key={answer.id} />
      ))}
    </div>
  );
};

export default AnswersList;
