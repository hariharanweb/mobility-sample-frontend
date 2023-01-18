import React from 'react';
import Vehicle from './Vehicle';

const vehicle = {
  category: 'Sedan',
  capacity: 4,
  make: 'Maruti',
  model: 'Swift Dzire',
  color: 'White',
  energy_type: 'Diesel',
  registration: 'KA 01 MM 1234',
};
export default {
  title: 'Vehicle',
  component: Vehicle,
};
export const Primary = () => <Vehicle vehicle={vehicle} />;
