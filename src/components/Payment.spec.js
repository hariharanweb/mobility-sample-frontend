import React from 'react';
import {
  render, screen, act, fireEvent, waitFor,
} from '@testing-library/react';
import Payment from './Payment';

const onConfirmPayment = jest.fn();

describe('Payment Selection', () => {
  const initResults = [
    {
      context: {
        domain: 'nic2004:60221',
        country: 'IND',
        city: 'std:080',
        action: 'select',
        core_version: '1.0.0',
        bap_id: 'sample_mobility_bap',
        bap_uri: 'http://localhost:2010',
        transaction_id: '47536e49-05a5-4e34-bbb3-5f882f30c2c9',
        message_id: 'ea1f839c-bb4e-4f5d-b773-468794680d87',
        timestamp: '2023-01-13T16:02:21+05:30',
        bpp_id: 'sample_mobility_bpp_cabs',
        bpp_uri: 'http://localhost:3010',
      },
      message: {
        order: {
          provider: {
            id: '111-222-300',
          },
          items: [
            {
              id: 'FAKE_SEDAN_ID',
              fulfillment_id: 'FAKE_SEDAN_FULFILLMENT_ID',
              descriptor: {
                name: 'Sedan',
                code: 'SEDAN_TAXI',
                images: [
                  'https://cdn.iconscout.com/icon/premium/png-256-thumb/sedan-car-469131.png',
                ],
              },
              price: {
                currency: 'INR',
                value: '111',
              },
              category_id: 'FAKE_TAXI_SEDAN',
            },
          ],
          quote: {
            price: {
              currency: 'INR',
              value: 141,
            },
            breakup: [
              {
                title: 'Fare',
                price: {
                  currency: 'INR',
                  value: '111',
                },
              },
              {
                title: 'Tax',
                price: {
                  currency: 'INR',
                  value: '30',
                },
              },
            ],
          },
        },
      },
    },
  ];

  it('Should display CashPayment', () => {
    render(<Payment
      onConfirmPayment={onConfirmPayment}
      initResults={initResults}
    />);
    expect(screen.getByLabelText('Cash')).toBeInTheDocument();
  });
  it('Should display UPI Payment', () => {
    render(<Payment
      onConfirmPayment={onConfirmPayment}
      initResults={initResults}
    />);
    expect(screen.getByLabelText('UPI')).toBeInTheDocument();
  });
  it('Should check of a payment mode selection', async () => {
    render(<Payment
      onConfirmPayment={onConfirmPayment}
      initResults={initResults}
    />);
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
