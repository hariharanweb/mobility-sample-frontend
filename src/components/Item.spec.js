import React from 'react';
import { act } from 'react-dom/test-utils';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import Item from './Item';
import '@testing-library/jest-dom';

jest.mock('../screens/SelectJourney', () => () => <div data-testid="SelectJourney" />);
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

const onSelectJourney = jest.fn();
describe('Item for cabs', () => {
  const itemCabs = {
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
      value: '111',
    },
    category_id: 'Bake_TAXI_SEDAN',
  };
  const isParentCabs = false;
  const bppUrlCabs = 'http://localhost:3010';
  const providerCabs = {
    id: '111-222-300',
    descriptor: {
      name: "Bake Taxi's",
      long_desc: 'We are Bake',
      images: [
        'https://s3.amazonaws.com/ionic-marketplace/uber-clone-using-ionic-and-firebase/icon.jpg',
      ],
    },
    locations: [
      {
        id: 'Bake_TAXI_LOCATION_ID',
        gps: '12.973614,77.608548',
      },
    ],
    categories: [
      {
        id: 'Bake_TAXI_SEDAN',
        descriptor: {
          name: 'Sedan Taxi',
        },
      },
      {
        id: 'Bake_TAXI_SUV',
        descriptor: {
          name: 'SUV Taxi',
        },
      },
    ],
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
          value: '111',
        },
        category_id: 'Bake_TAXI_SEDAN',
      },
      {
        id: 'Bake_SUV_ID',
        fulfillment_id: 'Bake_SUV_FULFILLMENT_ID',
        descriptor: {
          name: 'SUV',
          code: 'SUV_TAXI',
          images: [
            'https://cdn.iconscout.com/icon/premium/png-256-thumb/taxi-2716987-2254385.png',
          ],
        },
        price: {
          currency: 'INR',
          value: '1411',
        },
        category_id: 'Bake_TAXI_SUV',
      },
    ],
  };
  const fulfillmentsCabs = [
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
  it('should display catalog header image', async () => {
    render(<Item
      item={itemCabs}
      isParent={isParentCabs}
      onSelectJourney={onSelectJourney}
      provider={providerCabs}
      fulfillments={fulfillmentsCabs}
      bppUrl={bppUrlCabs}
    />);
    expect(screen.getByAltText('taxi-icon')).toBeInTheDocument();
  });

  it('should display value', async () => {
    render(<Item
      item={itemCabs}
      isParent={isParentCabs}
      onSelectJourney={onSelectJourney}
      provider={providerCabs}
      fulfillments={fulfillmentsCabs}
      bppUrl={bppUrlCabs}
    />);
    expect(screen.getByText('₹ 111')).toBeInTheDocument();
  });

  it('should display select button', async () => {
    render(<Item
      item={itemCabs}
      isParent={isParentCabs}
      onSelectJourney={onSelectJourney}
      provider={providerCabs}
      fulfillments={fulfillmentsCabs}
      bppUrl={bppUrlCabs}
    />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain('Select');
  });

  it('should call onSelect function', async () => {
    render(<Item
      item={itemCabs}
      isParent={isParentCabs}
      onSelectJourney={onSelectJourney}
      provider={providerCabs}
      fulfillments={fulfillmentsCabs}
      bppUrl={bppUrlCabs}
    />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    act(() => {
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(onSelectJourney).toHaveBeenCalled();
    });
  });
  it('should display item-with-border className', async () => {
    const { container } = render(<Item
      item={itemCabs}
      isParent={isParentCabs}
      onSelectJourney={onSelectJourney}
      provider={providerCabs}
      fulfillments={fulfillmentsCabs}
      bppUrl={bppUrlCabs}
    />);
    expect(container.firstChild).toHaveClass('item-with-border');
  });
});

describe('Item for trains', () => {
  const itemTrains = {
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
  };
  const isParentTrains = true;
  const categoryTrains = 'EC';
  const bppUrlTrains = 'http://localhost:4010';
  const providerTrains = {
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
  const fulfillmentsTrains = [
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
    render(<Item
      item={itemTrains}
      category={categoryTrains}
      isParent={isParentTrains}
      onSelectJourney={onSelectJourney}
      provider={providerTrains}
      fulfillments={fulfillmentsTrains}
      bppUrl={bppUrlTrains}
    />);
    expect(screen.getByText('₹ 1485')).toBeInTheDocument();
  });
  it('should display category', async () => {
    render(<Item
      item={itemTrains}
      category={categoryTrains}
      isParent={isParentTrains}
      onSelectJourney={onSelectJourney}
      provider={providerTrains}
      fulfillments={fulfillmentsTrains}
      bppUrl={bppUrlTrains}
    />);
    expect(screen.getByText('GATIMAAN EXP')).toBeInTheDocument();
  });

  it('should not display item-with-border className', async () => {
    const { container } = render(<Item
      item={itemTrains}
      category={categoryTrains}
      isParent={isParentTrains}
      onSelectJourney={onSelectJourney}
      provider={providerTrains}
      fulfillments={fulfillmentsTrains}
      bppUrl={bppUrlTrains}
    />);
    expect(container.firstChild).toHaveClass('MuiGrid-root MuiGrid-container css-1cwdt9v-MuiGrid-root');
  });
});

describe('Item for parent trains', () => {
  const itemTrainsParent = {
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
  };
  const isParentTrainsParent = false;
  const categoryTrainsParent = '3 AC';
  const bppUrlTrainsParent = 'http://localhost:4010';
  const providerTrainsParent = {
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
  const fulfillmentsTrainsParent = [
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
    render(<Item
      item={itemTrainsParent}
      category={categoryTrainsParent}
      isParent={isParentTrainsParent}
      onSelectJourney={onSelectJourney}
      provider={providerTrainsParent}
      fulfillments={fulfillmentsTrainsParent}
      bppUrl={bppUrlTrainsParent}
    />);
    expect(screen.getByText('₹ 825')).toBeInTheDocument();
  });
  it('should display category', async () => {
    render(<Item
      item={itemTrainsParent}
      category={categoryTrainsParent}
      isParent={isParentTrainsParent}
      onSelectJourney={onSelectJourney}
      provider={providerTrainsParent}
      fulfillments={fulfillmentsTrainsParent}
      bppUrl={bppUrlTrainsParent}
    />);
    expect(screen.getByText('3 AC')).toBeInTheDocument();
  });

  it('should not display item-with-border className', async () => {
    const { container } = render(<Item
      item={itemTrainsParent}
      category={categoryTrainsParent}
      isParent={isParentTrainsParent}
      onSelectJourney={onSelectJourney}
      provider={providerTrainsParent}
      fulfillments={fulfillmentsTrainsParent}
      bppUrl={bppUrlTrainsParent}
    />);
    expect(container.firstChild).toHaveClass('MuiGrid-root MuiGrid-container css-1cwdt9v-MuiGrid-root');
  });
});
