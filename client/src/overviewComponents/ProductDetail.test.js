import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';

test('renders the product detail', () => {
  render(<ProductDetail />);
  screen.getByText('Product Category').toBeInTheDocument();
});