import React from 'react';
import { render, screen } from '@testing-library/react';
import Vehicle from './Vehicle';

describe('Vehicle', () => {
  const vehicle = {
    category: 'Sedan',
    capacity: 4,
    make: 'Maruti',
    model: 'Swift Dzire',
    color: 'White',
    energy_type: 'Diesel',
    registration: 'KA 01 MM 1234',
  };
  it('Should vehicle make', () => {
    render(<Vehicle vehicle={vehicle} />);
    expect(screen.getByText('Maruti')).toBeInTheDocument();
  });
  it('Should vehicle model - color', () => {
    render(<Vehicle vehicle={vehicle} />);
    expect(screen.getByText('Swift Dzire - White')).toBeInTheDocument();
  });
  it('Should vehicle registration number', () => {
    render(<Vehicle vehicle={vehicle} />);
    expect(screen.getByText('KA 01 MM 1234')).toBeInTheDocument();
  });
});
