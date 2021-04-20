import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from '../../client/src/qaComponents/Question';

describe('question component', ()=> {
  test('shows correct question body', () => {
    const testQuestion = 'Is this a question?';
    render (<Question bodyText={testQuestion} />);

    expect(screen.getByText(testQuestion)).toBeTruthy();
  });
});
