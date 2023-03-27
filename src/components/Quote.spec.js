import React from 'react';
import {
  render, screen, act, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from './Quote';

let bookingInformation = {};
let provider = {};
describe('Quote', () => {
  bookingInformation = [
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
  provider = {
    id: '111-222-300',
    descriptor: {
      name: "Fake Taxi's",
      long_desc: 'We are fake',
      images: [
        'https://ih1.redbubble.net/image.925211637.3466/flat,128x,075,f-pad,128x128,f8f8f8.jpg',
      ],
    },
    locations: [
      {
        id: 'FAKE_TAXI_LOCATION_ID',
        gps: '12.973614,77.608548',
      },
    ],
    categories: [
      {
        id: 'FAKE_TAXI_SEDAN',
        descriptor: {
          name: 'Sedan Taxi',
        },
      },
      {
        id: 'FAKE_TAXI_SUV',
        descriptor: {
          name: 'SUV Taxi',
        },
      },
    ],
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
      {
        id: 'FAKE_SUV_ID',
        fulfillment_id: 'FAKE_SUV_FULFILLMENT_ID',
        descriptor: {
          name: 'SUV',
          code: 'SUV_TAXI',
          images: [
            'https://cdn.iconscout.com/icon/premium/png-256-thumb/taxi-2716987-2254385.png',
          ],
        },
        price: {
          currency: 'INR',
          value: '141',
        },
        category_id: 'FAKE_TAXI_SUV',
      },
    ],
  };
  it('should display vehicle icon', async () => {
    render(<Quote bookingInformation={bookingInformation} provider={provider} />);
    expect(screen.getByAltText('item-icon')).toBeInTheDocument();
  });
  it('should display button', async () => {
    render(<Quote bookingInformation={bookingInformation} provider={provider} />);
    const button = screen.getByTestId('confirm');
    expect(button).toBeInTheDocument();
  });
  it('should display vehicle model', async () => {
    render(<Quote bookingInformation={bookingInformation} provider={provider} />);
    expect(screen.getByText('Sedan')).toBeInTheDocument();
  });
  it('should display fare breakup', async () => {
    render(<Quote bookingInformation={bookingInformation} provider={provider} />);
    expect(screen.getByText('Fare Breakup')).toBeInTheDocument();
    expect(screen.getByText('Tax')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('INR 141')).toBeInTheDocument();
    expect(screen.getByText('INR 111')).toBeInTheDocument();
    expect(screen.getByText('INR 30')).toBeInTheDocument();
  });

  it('Should submit user details on button click', async () => {
    const onInitJourney = jest.fn();
    render(<Quote
      bookingInformation={bookingInformation}
      provider={provider}
      onInitJourney={onInitJourney}
    />);
    const button = screen.getByTestId('confirm');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Confirm');
    expect(button).toBeDisabled();
    const inputField = screen.getAllByRole('textbox');
    expect(inputField[0]).toBeInTheDocument();
    act(() => {
      fireEvent.change(inputField[0], { target: { value: 'Pro' } });
      fireEvent.change(inputField[1], { target: { value: 'p@gm.com' } });
      fireEvent.change(inputField[2], { target: { value: '1234567890' } });
    });
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    act(() => {
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(onInitJourney).toBeCalled();
    });
  });
});
