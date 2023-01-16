import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Provider from './Provider';

let provider = {};
describe('Provider', () => {
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
  it('should display header icon', async () => {
    render(<Provider provider={provider} />);
    expect(screen.getByAltText('header-icon')).toBeInTheDocument();
  });
  it('should display provider name', async () => {
    render(<Provider provider={provider} />);
    expect(screen.getByText("Fake Taxi's")).toBeInTheDocument();
  });
});
