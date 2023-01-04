import React from 'react';
import { render, screen } from '@testing-library/react';
import Catalog from './Catalog';
import '@testing-library/jest-dom';

jest.mock('./Item', () => () => <div data-testid="Item" />);

let catalog = {};
let bookingInformation = {};
let bookingResponse = {};
let showModal;
let loadingJourney;
let handleClose;
let onSelectJourney;
describe('Basic functionality', () => {
  showModal = false;
  loadingJourney = false;
  bookingInformation = {};
  bookingResponse = {};
  handleClose = jest.fn();
  onSelectJourney = jest.fn();
  catalog = {
    'bpp/descriptor': {
      name: 'Fake Taxi',
      code: 'FAKE_TAXI',
    },
    'bpp/providers': [
      {
        id: 'FAKE_TAXI',
        descriptor: {
          name: 'Fake Taxi',
          images: [
            'https://cdn3.iconfinder.com/data/icons/fake-news/500/yul748_24_fake_news_truck_business_logo_computer_car-512.png',
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
            id: 'FAKE_TAXI_CATEGORY',
            descriptor: {
              name: 'Premium Taxi',
            },
          },
        ],
        items: [
          {
            id: 'FAKE_TAXI_ID',
            fulfillment_id: 'FAKE_TAXI_FULFILLMENT_ID',
            descriptor: {
              name: 'Premium Taxi',
              code: 'Premium Taxi',
              images: [
                'https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png',
              ],
            },
            price: {
              currency: 'INR',
              value: '111',
            },
            category_id: 'FAKE_TAXI_CATEGORY_ID',
          },
        ],
      },
    ],
    'bpp/fulfillments': [
      {
        tracking: false,
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
      },
    ],
  };

  it('should display catalog header', async () => {
    render(
      <Catalog
        catalog={catalog}
        showModal={showModal}
        bookingInformation={bookingInformation}
        bookingResponse={bookingResponse}
        loadingJourney={loadingJourney}
        handleClose={handleClose}
        onSelectJourney={onSelectJourney}
      />,
    );
    expect(screen.getByText('Fake Taxi')).toBeInTheDocument();
  });

  it('should display catalog header image', async () => {
    render(
      <Catalog
        catalog={catalog}
        showModal={showModal}
        bookingInformation={bookingInformation}
        bookingResponse={bookingResponse}
        loadingJourney={loadingJourney}
        handleClose={handleClose}
        onSelectJourney={onSelectJourney}
      />,
    );
    expect(screen.getByAltText('header-icon')).toBeInTheDocument();
  });

  it('should display catalog item', async () => {
    render(
      <Catalog
        catalog={catalog}
        showModal={showModal}
        bookingInformation={bookingInformation}
        bookingResponse={bookingResponse}
        loadingJourney={loadingJourney}
        handleClose={handleClose}
        onSelectJourney={onSelectJourney}
      />,
    );
    expect(screen.getByTestId('Item')).toBeInTheDocument();
  });
});
