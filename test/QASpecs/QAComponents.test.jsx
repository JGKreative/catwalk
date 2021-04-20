import React from 'react';
import { render, screen } from '@testing-library/react';
import QA from '../../client/src/qaComponents/index';

describe('Question Component', () => {
  test('shows correct question body', () => {
    const testQuestion = 'Is this a question?';
    render (<QA.Question bodyText={testQuestion} />);

    expect(screen.getByText(testQuestion)).toBeTruthy();
  });
});

describe('AnswersList Component', () => {
  test('shows correct answer, user, and timestamp', () => {
    const testAnswer1 = {
      bodyText
    }
  });

});