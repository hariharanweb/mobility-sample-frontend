import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

let item = {};
let details = {};
describe('Basic functionality', () => {
  item = {
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
    tags: {
      NameOfModel: 'Nexon',
      Make: 'Tata',
      FuelType: 'Petrol',
      VehicleType: 'Premium Taxi',
    },
  };
  details = {
    showModal: false,
    bookingInformation: {},
    bookingResponse: {},
    loadingJourney: false,
    handleClose: jest.fn(),
    onSelectJourney: jest.fn(),
  };
  it('should display catalog header image', async () => {
    render(<Item item={item} details={details} />);
    expect(screen.getByAltText('taxi-icon')).toBeInTheDocument();
  });

  it('should display taxi', async () => {
    render(<Item item={item} details={details} />);
    expect(screen.getByText('Tata - Nexon')).toBeInTheDocument();
  });

  it('should display taxi category', async () => {
    render(<Item item={item} details={details} />);
    expect(screen.getByText('Premium Taxi')).toBeInTheDocument();
  });

  it('should display value', async () => {
    render(<Item item={item} details={details} />);
    expect(screen.getByText('₹ 111')).toBeInTheDocument();
  });

  it('should display select button', async () => {
    render(<Item item={item} details={details} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain('Select');
  });
});
