import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import QA from '../../client/src/qaComponents/index';
import testData from './testData';

jest.mock('axios');

// describe('QA Module', () => {
//   //NOTE: Once get requests from API are written, refactor this test
//   test('it should retrieve data from the API', () => {
//     axios.get.mockResolvedValue({
//       data: testData
//     });
//     expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/https:\/\/app-hrsei-api.herokuapp.com\/api\/fec2\/hr-sea\/qa\/questions/))
//   });

//   test('retrieved data should be made available to be rendered by child components', async () => {
//     axios.get.mockResolvedValue({
//       data: testData
//     });
//     // var targetQ = "Why is this product cheaper here than other sites?"
//     // var targetA = "We are selling it here without any markup from the middleman!"
//     // render(<QA.QnAParentComp questionsData={testData} />);
//     render(<QA.QnAParentComp />);
//     expect(screen.getByText(targetQ)).toBeTruthy();
//     expect(screen.getByText(targetA)).toBeTruthy();
//   });

// });

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
