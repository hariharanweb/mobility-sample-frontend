import React from 'react';
import Item from './Item';

export default {
  title: 'Item',
  component: Item,
};
const item = {
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
const handleClose = () => {};
const onSelectJourney = () => {};
const details = {
  showModal: false,
  bookingInformation: {},
  bookingResponse: {},
  loadingJourney: false,
  handleClose,
  onSelectJourney,
};
export const Primary = () => <Item item={item} details={details} />;
