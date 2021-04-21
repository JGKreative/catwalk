import React from 'react';
import Answer from './Answer';

const testData = [
  {
    bodyText: 'just google it',
    username: 'CPT Obvious',
    timestamp: '19-Apr-2021',
  },
  {
    bodyText: 'really that is the best answer. Google is your friend',
    username: '2LT Obvious',
    timestamp: '20-Apr-2021',
  },
];

const AnswersList = () => (
  <div>
    A:
    <Answer answer={testData[0]} />
    <Answer answer={testData[1]} />
  </div>
);

export default AnswersList;
