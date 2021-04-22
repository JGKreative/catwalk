import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/qaComponents/index';
import testData from './testData';

describe('QA Module', () => {
  //NOTE: Once get requests from API are written, refactor this test
  test('retrieved data should be made available to child components', () => {
    var targetQ = "Why is this product cheaper here than other sites?"
    var targetA = "We are selling it here without any markup from the middleman!"
    render(<QA.QnAParentComp questionsData={testData.questionsData} />);
    expect(screen.getByText(targetQ)).toBeTruthy();
    expect(screen.getByText(targetA)).toBeTruthy();
  })
})