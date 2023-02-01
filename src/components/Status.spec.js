import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Status from './Status';

const onTrackVehicle = jest.fn();
describe('Status for cabs', () => {
  const vehicleStatusCabs = [
    {
      context: {
        action: 'status',
        transaction_id: '1eae5674-d777-4330-951d-773b8f2306a2',
        bpp_uri: 'http://localhost:3010',
        bpp_id: 'sample_mobility_bpp_cabs',
        domain: 'nic2004:60221',
        country: 'IND',
        city: 'std:080',
        core_version: '1.0.0',
        bap_id: 'sample_mobility_bap',
        bap_uri: 'http://localhost:2010',
        message_id: '8fc76d92-0960-4ddf-8271-821fc9b632d3',
        timestamp: '2023-02-01T13:47:50+05:30',
      },
      message: {
        order: {
          id: 'c98f5498-9a8a-4eec-8808-ca7bc5ca742e',
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
                gps: '12.9372469,77.6109981',
              },
              authorization: {
                type: 'OTP',
                token: '3091',
              },
            },
            end: {
              location: {
                gps: '12.9702626,77.6099629',
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
            state: {
              code: 'DRIVER_ALLOCATED',
            },
          },
          state: 'CONFIRMED',
        },
      },
    },
  ];
  it('should display confirmed status', async () => {
    render(<Status vehicleStatus={vehicleStatusCabs} onTrackVehicle={onTrackVehicle} />);
    expect(screen.getByText('Your order status is: CONFIRMED')).toBeInTheDocument();
  });
  it('should display Track button', async () => {
    render(<Status vehicleStatus={vehicleStatusCabs} onTrackVehicle={onTrackVehicle} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Track');
  });
  it('should display OTP', async () => {
    render(<Status vehicleStatus={vehicleStatusCabs} onTrackVehicle={onTrackVehicle} />);
    expect(screen.getByText('OTP:3091')).toBeInTheDocument();
  });
});
describe('Status for trains', () => {
  const vehicleStatusTrains = [
    {
      context: {
        action: 'status',
        transaction_id: '2ce495d0-666c-4404-a31e-7e939bb5fa6f',
        bpp_uri: 'http://localhost:4010',
        bpp_id: 'sample_mobility_bpp_trains',
        domain: 'nic2004:60221',
        country: 'IND',
        city: 'std:080',
        core_version: '1.0.0',
        bap_id: 'sample_mobility_bap',
        bap_uri: 'http://localhost:2010',
        message_id: '87bce8ca-a0ac-4fc9-9ade-03615c4ff16b',
        timestamp: '2023-02-01T14:07:28+05:30',
      },
      message: {
        order: {
          id: 'c2ca8386-3f1f-47c3-b3ab-41ce2544181f',
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
            tracking: false,
            start: {
              location: {
                gps: '12.9372469,77.6109981',
              },
              authorization: {
                type: 'OTP',
                token: '2249',
              },
            },
            end: {
              location: {
                gps: '12.9702626,77.6099629',
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
            state: {
              code: 'DRIVER_ALLOCATED',
            },
          },
          state: 'CONFIRMED',
        },
      },
    },
  ];
  it('should display confirmed status', async () => {
    render(<Status vehicleStatus={vehicleStatusTrains} onTrackVehicle={onTrackVehicle} />);
    expect(screen.getByText('Your order status is: CONFIRMED')).toBeInTheDocument();
  });
  it('should display OTP', async () => {
    render(<Status vehicleStatus={vehicleStatusTrains} onTrackVehicle={onTrackVehicle} />);
    expect(screen.getByText('OTP:2249')).toBeInTheDocument();
  });
});
