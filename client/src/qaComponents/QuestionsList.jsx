import React from 'react';
import Question from './Question';

const QuestionsList = ({ questions }) => (
  <div>
    {questions.map((question) => (
      <Question question={question} />
    ))}
  </div>
);

export default QuestionsList;
