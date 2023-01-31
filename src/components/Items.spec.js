import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Items from './Items';

jest.mock('../screens/SelectJourney', () => () => <div data-testid="SelectJourney" />);
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

const onSelectJourney = jest.fn();
describe('Items', () => {
  const parentItem = {
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
  };
  const categories = [
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
  ];
  const items = [
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
  ];
  const bppUrl = 'http://localhost:4010';
  const provider = {
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
  };
  const fulfillments = [
    {
      tracking: false,
      start: {
        location: {
          gps: '12.9372469,77.6109981',
        },
      },
      end: {
        location: {
          gps: '12.9702626,77.6099629',
        },
      },
    },
  ];

  it('should display value', async () => {
    render(<Items
      parentItem={parentItem}
      categories={categories}
      items={items}
      onSelectJourney={onSelectJourney}
      provider={provider}
      fulfillments={fulfillments}
      bppUrl={bppUrl}
    />);
    expect(screen.getByText('₹755 - ₹1485')).toBeInTheDocument();
  });
  it('should display time period', async () => {
    render(<Items
      parentItem={parentItem}
      categories={categories}
      items={items}
      onSelectJourney={onSelectJourney}
      provider={provider}
      fulfillments={fulfillments}
      bppUrl={bppUrl}
    />);
    expect(screen.getAllByText('01:40 - 03:20')[0]).toBeInTheDocument();
  });
});
