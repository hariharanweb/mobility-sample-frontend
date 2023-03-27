import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Track from './Track';

describe('Track', () => {
  const trackResult = [
    {
      message: {
        tracking: {
          url: 'wholetthedogsout',
        },
      },
    },
  ];
  it('Should display message to click', () => {
    render(<Track trackResult={trackResult} />);
    expect(screen.getByText('Click to track your order')).toBeInTheDocument();
  });

  it('Should display track vehicle', () => {
    render(<Track trackResult={trackResult} />);
    expect(screen.getByText('Track Vehicle')).toBeInTheDocument();
  });
});
