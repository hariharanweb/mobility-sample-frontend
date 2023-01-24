import React from 'react';
import { render, screen } from '@testing-library/react';
import Catalog from './Catalog';
import '@testing-library/jest-dom';

jest.mock('./Item', () => () => <div data-testid="Item" />);

let bppProvider = {};
let onSelectJourney;
describe('Catalog', () => {
  onSelectJourney = jest.fn();
  bppProvider = {
    context: {
      domain: 'nic2004:60221',
      country: 'IND',
      city: 'std:080',
      action: 'search',
      core_version: '1.0.0',
      bap_id: 'sample_mobility_bap',
      bap_uri: 'http://localhost:2010',
      transaction_id: '510b315a-e67a-404f-82f0-e83c8916126d',
      message_id: 'd35d7c98-d657-4483-83af-35980f45c509',
      timestamp: '2023-01-24T15:51:28+05:30',
      bpp_id: 'sample_mobility_bpp_cabs',
      bpp_uri: 'http://localhost:3010',
    },
    message: {
      catalog: {
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
      },
    },
  };

  it('should display catalog header', async () => {
    render(
      <Catalog
        catalog={bppProvider.message.catalog}
        onSelectJourney={onSelectJourney}
        bppUrl={bppProvider.context.bpp_uri}
      />,
    );
    expect(screen.getByText('Fake Taxi')).toBeInTheDocument();
  });

  it('should display catalog header image', async () => {
    render(
      <Catalog
        catalog={bppProvider.message.catalog}
        onSelectJourney={onSelectJourney}
        bppUrl={bppProvider.context.bpp_uri}
      />,
    );
    expect(screen.getByAltText('header-icon')).toBeInTheDocument();
  });

  it('should display catalog item', async () => {
    render(
      <Catalog
        catalog={bppProvider.message.catalog}
        onSelectJourney={onSelectJourney}
        bppUrl={bppProvider.context.bpp_uri}
      />,
    );
    expect(screen.getByTestId('Item')).toBeInTheDocument();
  });
  it('should display catalog item for trains', async () => {
    const bppProviderTrains = {
      context: {
        domain: 'nic2004:60221',
        country: 'IND',
        city: 'std:080',
        action: 'search',
        core_version: '1.0.0',
        bap_id: 'sample_mobility_bap',
        bap_uri: 'http://localhost:2010',
        transaction_id: 'db16cd40-100f-4909-8a15-6b67c92cec22',
        message_id: 'd35d7c98-d657-4483-83af-35980f45c509',
        timestamp: '2023-01-24T15:51:28+05:30',
        bpp_id: 'sample_mobility_bpp_trains',
        bpp_uri: 'http://localhost:4010',
      },
      message: {
        catalog: {
          'bpp/descriptor': {
            name: 'IRCTC',
            code: 'IRCTC',
          },
          'bpp/providers': [
            {
              id: '111-222-299',
              descriptor: {
                name: 'IRCTC',
                images: [
                  'https://www.irctc.co.in/nget/assets/images/secondry-logo.png',
                ],
              },
              categories: [
                {
                  id: '3A',
                  description: '3 AC',
                },
                {
                  id: '2A',
                  description: '2 AC',
                },
                {
                  id: '1A',
                  description: '1 AC',
                },
              ],
              items: [
                {
                  id: 'TRAIN_22222',
                  descriptor: {
                    name: 'CSMT RAJDHANI',
                    code: 'TRAIN_22222',
                  },
                  price: {
                    currency: 'INR',
                    minimum_value: '825',
                    maximum_value: '1560',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T16:55:00+00:00',
                      end: '2023-01-09T18:45:00+00:00',
                    },
                  },
                },
                {
                  id: 'TRAIN_22222_3A',
                  parent_item_id: 'TRAIN_22222',
                  descriptor: {
                    name: 'CSMT RAJDHANI 3A',
                    code: 'TRAIN_22222_3A',
                  },
                  price: {
                    currency: 'INR',
                    value: '825',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T16:55:00+00:00',
                      end: '2023-01-09T18:45:00+00:00',
                    },
                  },
                  category_id: '3A',
                },
                {
                  id: 'TRAIN_22222_2A',
                  parent_item_id: 'TRAIN_22222',
                  descriptor: {
                    name: 'CSMT RAJDHANI 2A',
                    code: 'TRAIN_22222_2A',
                  },
                  price: {
                    currency: 'INR',
                    value: '1250',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T16:55:00+00:00',
                      end: '2023-01-09T18:45:00+00:00',
                    },
                  },
                  category_id: '2A',
                },
                {
                  id: 'TRAIN_22222_1A',
                  parent_item_id: 'TRAIN_22222',
                  descriptor: {
                    name: 'CSMT RAJDHANI 1A',
                    code: 'TRAIN_22222_1A',
                  },
                  price: {
                    currency: 'INR',
                    value: '1560',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T16:55:00+00:00',
                      end: '2023-01-09T18:45:00+00:00',
                    },
                  },
                  category_id: '1A',
                },
                {
                  id: 'TRAIN_12050',
                  descriptor: {
                    name: 'GATIMAAN EXP',
                    code: 'TRAIN_12050',
                  },
                  price: {
                    currency: 'INR',
                    minimum_value: '755',
                    maximum_value: '1485',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T08:10:00+00:00',
                      end: '2023-01-09T09:50:00+00:00',
                    },
                  },
                },
                {
                  id: 'TRAIN_12050_CC',
                  parent_item_id: 'TRAIN_12050',
                  descriptor: {
                    name: 'GATIMAAN EXP',
                    code: 'TRAIN_12050_CC',
                  },
                  price: {
                    currency: 'INR',
                    value: '755',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T08:10:00+00:00',
                      end: '2023-01-09T09:50:00+00:00',
                    },
                  },
                  category_id: 'CC',
                },
                {
                  id: 'TRAIN_12050_EC',
                  parent_item_id: 'TRAIN_12050',
                  descriptor: {
                    name: 'GATIMAAN EXP',
                    code: 'TRAIN_12050_EC',
                  },
                  price: {
                    currency: 'INR',
                    value: '1485',
                  },
                  time: {
                    range: {
                      start: '2023-01-09T08:10:00+00:00',
                      end: '2023-01-09T09:50:00+00:00',
                    },
                  },
                  category_id: 'EC',
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
        },
      },
    };
    render(
      <Catalog
        catalog={bppProviderTrains.message.catalog}
        onSelectJourney={onSelectJourney}
        bppUrl={bppProviderTrains.context.bpp_uri}
      />,
    );
    expect(screen.getByText('IRCTC')).toBeInTheDocument();
  });
});
