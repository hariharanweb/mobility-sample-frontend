import React from 'react';
import { render, screen } from '@testing-library/react';
import CarLoader from './CarLoader';

describe('CarLoader', () => {
  it('Should display name', () => {
    render(<CarLoader isTextAbsent />);
    expect(screen.queryByText('Finding perfect rides for you.')).not.toBeInTheDocument();
    expect(screen.getByAltText('loading-icon')).toBeInTheDocument();
  });
  it('Should display name', () => {
    render(<CarLoader isTextAbsent={false} />);
    expect(screen.queryByText('Finding perfect rides for you.')).toBeInTheDocument();
    expect(screen.getByAltText('loading-icon')).toBeInTheDocument();
  });
});
