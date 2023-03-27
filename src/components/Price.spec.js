import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Price from './Price';

describe('Price', () => {
  it('Should display price Value', () => {
    render(<Price price={{ value: 100 }} />);
    expect(screen.getByText('₹ 100')).toBeInTheDocument();
  });
  it('Should min value to max value', () => {
    render(<Price price={{ minimum_value: 100, maximum_value: 120 }} />);
    expect(screen.getByText('₹ 100 - ₹ 120')).toBeInTheDocument();
  });
});
