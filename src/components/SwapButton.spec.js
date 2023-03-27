import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import SwapeButton from './SwapButton';

describe('Swap button', () => {
  it('Should display swap button', () => {
    render(<SwapeButton />);
    expect(screen.getByTestId('SwapVertIcon')).toBeInTheDocument();
  });
  it('Should swap on click', () => {
    const onSwapLocation = jest.fn();
    render(<SwapeButton onSwapLocation={onSwapLocation} />);
    fireEvent.click(screen.getByTestId('SwapVertIcon'));
    expect(onSwapLocation).toHaveBeenCalled();
  });
});
