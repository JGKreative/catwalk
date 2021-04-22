import React from 'react';
import Question from './Question';

const QuestionsList = ({ questions }) => {
  const mapTest = questions.map((question) => (
    <Question question={question} key={question.question_id} />
  ));

  return (
    <ul>
      {mapTest}
    </ul>
  );
};

export default QuestionsList;
