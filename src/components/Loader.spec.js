import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './Loader';

describe('Loader', () => {
  it('should display loader', async () => {
    render(<Loader />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
