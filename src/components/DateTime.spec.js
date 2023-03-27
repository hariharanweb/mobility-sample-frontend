import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateTime from './DateTime';

describe('DateTime', () => {
  it('Should initialize with given date', () => {
    const date = new Date('December 17, 1995 03:24:00');
    render(<DateTime dateTime={date} onDateTimeChange={() => {}} />);
    expect(screen.getByPlaceholderText('dd/mm/yyyy hh:mm')).toHaveValue('17/12/1995 03:24');
  });
});
