import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Time from './Time';

describe('Time', () => {
  it('Should display time duration', () => {
    render(<Time time={{ duration: '44m' }} />);
    expect(screen.getByText('44m')).toBeInTheDocument();
  });
  it('Should display time range', () => {
    const time = {
      range: {
        start: '2023-03-27T13:43:21+05:30',
        end: '2023-03-27T21:04:21+05:30',
      },
    };
    render(<Time time={time} />);
    expect(screen.getByText('01:43 - 09:04')).toBeInTheDocument();
  });
});
