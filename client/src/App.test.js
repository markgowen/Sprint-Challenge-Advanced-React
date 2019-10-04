import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('AppBar Text is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/AppBar-Text/i);
});

test('Heading Text is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/Heading-Text/i);
});
