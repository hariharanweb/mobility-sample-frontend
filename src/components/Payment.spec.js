import React from 'react';
import {
  render, screen, act, fireEvent, waitFor,
} from '@testing-library/react';
import Payment from './Payment';

const onConfirmPayment = jest.fn();

describe('Payment Selection', () => {
  it('Should call CashPayment', () => {
    render(<Payment onConfirmPayment={onConfirmPayment} />);
    const button = screen.getByLabelText('Cash');
    expect(button).toBeInTheDocument();
  });
  it('Should call UPI Payment', () => {
    render(<Payment onConfirmPayment={onConfirmPayment} />);
    const button = screen.getByLabelText('UPI');
    expect(button).toBeInTheDocument();
  });
  it('Should check of a payment mode selection', async () => {
    render(<Payment onConfirmPayment={onConfirmPayment} />);
    const button = screen.getByLabelText('UPI');
    expect(button).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByLabelText('UPI'));
    });
    await waitFor(() => {
      expect(button).toBeChecked();
    });
  });
});
