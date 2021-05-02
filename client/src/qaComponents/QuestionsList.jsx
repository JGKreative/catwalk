import React from 'react';
import Question from './Question';

const QuestionsList = ({ questions }) => (
  <ul style={{ borderRadius: '10px', padding: (30, 30, 20, 20), width: '80%', maxHeight: '80%', height: '50em', align: 'center', overflowY: 'scroll' }}>
    {questions.map((question) => (
      <Question question={question} key={question.question_id} />
    ))}
  </ul>
);

export default QuestionsList;
