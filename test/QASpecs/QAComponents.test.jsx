import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/qaComponents/index';
import testData from './testData';

describe('QA Module', () => {
  //NOTE: Once get requests from API are written, refactor this test
  test('retrieved data should be made available to child components', () => {
    var targetQ = "Why is this product cheaper here than other sites?"
    var targetA = "We are selling it here without any markup from the middleman!"
    render(<QA.QnAParentComp questionsData={testData} />);
    expect(screen.getByText(targetQ)).toBeTruthy();
    expect(screen.getByText(targetA)).toBeTruthy();
  });
});

describe('Question Component', ()=>{

  beforeAll(() => {
    const testQ = testData.results[0];
    render(<QA.Question question={ testQ } />);
  })
  test('it should display the askers name, the question body, and a timestamp from data matching the API shape', () => {
    const testQ = testData.results[0];
    expect(screen.getByText(testQ.question_body))
    expect(screen.getByText(testQ.question_date))
    expect(screen.getByText(testQ.asker_name))
  });
});

describe('Answer Component', ()=>{
  beforeAll(() => {
    const testA = testData.results[0].answers[68];
    render(<QA.Answer answer={testA} />)
  })
  test('it should display the answerer name, answer body, and a timestamp from data matching the API shape', () => {
    const testA = testData.results[0].answers[68];
    expect(screen.getByText(testA.body))
    expect(screen.getByText(testA.date))
    expect(screen.getByText(testA.answerer_name))
  }) ;
})
