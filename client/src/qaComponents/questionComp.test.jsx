import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from './Question';

const path = require('path');

let pathToComps = path.resolve('qaComponents/Question.jsx');

test('question component shows correct question body', () => {
  const testQuestion = 'Is this a question?';
  render (<Question bodyText={testQuestion} />);

  expect(screen.getByText(testQuestion)).toBeTruthy();
});

// maybe need this for test script: node --experimental-vm-modules node_modules/jest/bin/jest.js
