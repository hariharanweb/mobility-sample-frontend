import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from './Quote';

let bookingInformation = {};
describe('Quote', () => {
  bookingInformation = {
    context: {
      domain: 'nic2004:60221',
      country: 'IND',
      city: 'std:080',
      action: 'select',
      core_version: '1.0.0',
      bap_id: 'sample_mobility_bap',
      bap_uri: 'http://localhost:2010',
      transaction_id: '0c4dacc7-8ceb-4060-894f-ba873537f736',
      message_id: '1ec31f8d-3bb5-4ab1-89f6-aaf97041a119',
      timestamp: '2023-01-03T15:53:42+05:30',
      bpp_id: 'sample_mobility_bpp',
      bpp_uri: 'http://localhost:3010',
    },
    message: {
      order: {
        provider: {
          payment: {
            time: {
              duration: 'P2A',
            },
            collected_by: 'BPP',
            type: 'ON-FULFILLMENT',
          },
          items: [
            {
              rating: null,
              offer_id: null,
              category_id: 'DRIVER_OFFER',
              './komn/driver_name': 'VENKATESH',
              valid_till: '2022-11-04T12:13:28.634362938Z',
              id: 'd9d63e72-686d-4bb0-9b92-eb98d6924df5',
              price: {
                value: '238',
                currency: 'INR',
                offered_value: '238',
              },
              fulfillment_id: 'fulf_d9d63e72-686d-4bb0-9b92-eb98d6924df5',
              descriptor: {
                code: 'DRIVER_OFFER_AUTO_RICKSHAW',
              },
              duration_to_pickup: 105,
              tags: {
                './komn/distance_to_nearest_driver': '529',
              },
            },
          ],
          categories: [
            {
              id: 'DRIVER_OFFER',
            },
          ],
          fulfillments: [
            {
              start: {
                time: {
                  timestamp: '2022-11-04T12:13:13.640413176Z',
                },
                location: {
                  gps: '13.0099955, 77.65713760000001',
                },
              },
              end: {
                location: {
                  gps: '13.0325874, 77.55589359999999',
                },
              },
              id: 'fulf_d9d63e72-686d-4bb0-9b92-eb98d6924df5',
              vehicle: {
                category: 'AUTO_RICKSHAW',
              },
            },
          ],
          add_ons: [],
          id: 'api.beckn.juspay.in/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f',
          offers: [],
          descriptor: {
            name: 'Bangalore Autos',
          },
          locations: [],
          tags: {
            './komn/rides_confirmed': 0,
            './komn/rides_completed': 0,
            './komn/rides_inprogress': 0,
          },
        },
      },
    },
  };
  it('should display vehicle icon', async () => {
    render(<Quote bookingInformation={bookingInformation} />);
    expect(screen.getByAltText('vehicle-img')).toBeInTheDocument();
  });
  it('should display button', async () => {
    render(<Quote bookingInformation={bookingInformation} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain('Tap To Proceed');
  });
  it('should display value', async () => {
    render(<Quote bookingInformation={bookingInformation} />);
    expect(screen.getByText('₹')).toBeInTheDocument();
  });
});
