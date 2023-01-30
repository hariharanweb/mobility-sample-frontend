import React from 'react';
import { render, screen } from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation of cabs', () => {
  const details = {
    context: {
      domain: 'nic2004:60221',
      country: 'IND',
      city: 'std:080',
      action: 'confirm',
      core_version: '1.0.0',
      bap_id: 'sample_mobility_bap',
      bap_uri: 'http://localhost:2010',
      transaction_id: '05cf08ed-1c72-4fb1-a0c4-59bdbaf982fa',
      message_id: 'f7567266-8678-4946-877c-7fc427cb0b94',
      timestamp: '2023-01-24T16:17:21+05:30',
      bpp_id: 'sample_mobility_bpp_cabs',
      bpp_uri: 'http://localhost:3010',
    },
    message: {
      order: {
        id: 'a6fea4bb-0c4c-49a2-8001-4cf9604a3e0b',
        provider: {
          id: '111-222-300',
        },
        items: [
          {
            id: 'Bake_SEDAN_ID',
            fulfillment_id: 'Bake_SEDAN_FULFILLMENT_ID',
            descriptor: {
              name: 'Sedan',
              code: 'SEDAN_TAXI',
              images: [
                'https://cdn.iconscout.com/icon/premium/png-256-thumb/sedan-car-469131.png',
              ],
            },
            price: {
              currency: 'INR',
              value: '1111',
            },
            category_id: 'Bake_TAXI_SEDAN',
          },
        ],
        fulfillment: {
          tracking: true,
          start: {
            location: {
              gps: '12.934845,77.610949',
            },
          },
          end: {
            location: {
              gps: '13.011058,77.555064',
            },
          },
          agent: {
            name: 'Nikhil',
            dob: '01/02/1996',
            gender: 'Male',
            phone: '9876543210',
            email: 'nikhil@gmail.com',
          },
          vehicle: {
            category: 'Cab',
            capacity: '4',
            model: 'Sedan',
            color: 'black',
            energy_type: 'fuel',
            registration: 'DL 04 4444',
          },
        },
      },
    },
  };
  it('Should display confirm message', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Your booking is confirmed.')).toBeInTheDocument();
  });
  it('Should display transaction id', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Transaction ID: 05cf08ed-1c72-4fb1-a0c4-59bdbaf982fa')).toBeInTheDocument();
  });
  it('Should display fare', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Fare: INR 1111')).toBeInTheDocument();
  });
  it('Should display track button', () => {
    render(<Confirmation details={details} />);
    const buttons = screen.getAllByRole('button');
    expect((buttons[0]).textContent).toBe('Track');
    expect((buttons[1]).textContent).toBe('Status');
  });
});
describe('Confirmation of trains', () => {
  const details = {
    context: {
      domain: 'nic2004:60221',
      country: 'IND',
      city: 'std:080',
      action: 'confirm',
      core_version: '1.0.0',
      bap_id: 'sample_mobility_bap',
      bap_uri: 'http://localhost:2010',
      transaction_id: '6c537940-7ee9-4df5-a9f1-e29083ca070f',
      message_id: '94f83d02-1cd4-4027-b347-6f902996d321',
      timestamp: '2023-01-24T16:55:28+05:30',
      bpp_id: 'sample_mobility_bpp_trains',
      bpp_uri: 'http://localhost:4010',
    },
    message: {
      order: {
        id: '06b6b7d3-22fe-4a72-8cf5-ad005f7afe70',
        provider: {
          id: '111-222-299',
        },
        items: [
          {
            id: 'TRAIN_22222_3A',
            descriptor: {
              name: 'CSMT RAJDHANI 3A',
              code: 'TRAIN_22222_3A',
            },
            price: {
              currency: 'INR',
              value: '825',
            },
            category_id: '3A',
          },
        ],
        fulfillment: {
          tracking: true,
          start: {
            location: {
              gps: '12.934845,77.610949',
            },
          },
          end: {
            location: {
              gps: '13.011058,77.555064',
            },
          },
          agent: {
            name: 'Nikhil',
            dob: '01/02/1996',
            gender: 'Male',
            phone: '9876543210',
            email: 'nikhil@gmail.com',
          },
          vehicle: {
            category: 'Cab',
            capacity: '4',
            model: 'Sedan',
            color: 'black',
            energy_type: 'fuel',
            registration: 'DL 04 4444',
          },
        },
      },
    },
  };
  it('Should display confirm message', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Your booking is confirmed.')).toBeInTheDocument();
  });
  it('Should display transaction id', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Transaction ID: 6c537940-7ee9-4df5-a9f1-e29083ca070f')).toBeInTheDocument();
  });
  it('Should display fare', () => {
    render(<Confirmation details={details} />);
    expect(screen.getByText('Fare: INR 825')).toBeInTheDocument();
  });
  it('Should display track button', () => {
    render(<Confirmation details={details} />);
    const buttons = screen.getAllByRole('button');
    expect((buttons[0]).textContent).toBe('Status');
  });
});
