import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const onBackClick = jest.fn();
  it('Should display goBack button', () => {
    render(<Header onBackClick={onBackClick} />);
    expect(screen.getByTestId('ArrowBackIosNewIcon')).toBeInTheDocument();
  });
  it('Should display ONDC logo', () => {
    render(<Header onBackClick={onBackClick} />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
  });
});
