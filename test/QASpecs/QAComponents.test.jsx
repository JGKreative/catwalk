import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/qaComponents/index';

describe('Question Component', () => {
  test('shows correct question body', () => {
    const testQuestion = 'Is this a question?';
    render (<QA.Question body={testQuestion} />);

    expect(screen.getByText(testQuestion)).toBeTruthy();
  });
});
