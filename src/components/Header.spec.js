import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const title = 'Payment';
  const onBackClick = jest.fn();
  it('Should display header title', () => {
    render(<Header title={title} onBackClick={onBackClick} />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });
  it('Should display goBack button', () => {
    render(<Header title={title} onBackClick={onBackClick} />);
    expect(screen.getByTestId('ArrowBackIosNewIcon')).toBeInTheDocument();
  });
  it('Should display ONDC logo', () => {
    render(<Header title={title} onBackClick={onBackClick} />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
  });
  it('Should display caption', () => {
    render(<Header title={title} onBackClick={onBackClick} />);
    expect(screen.getByText('Powered by ThoughtWorks')).toBeInTheDocument();
  });
});
