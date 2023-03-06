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
  time: {
    duration: '00:45',
  },
  category_id: 'FAKE_TAXI_CATEGORY_ID',
};
const onItemSelect = () => {};
export const Primary = () => (
  <Item
    item={item}
    isParent={false}
    onItemSelect={onItemSelect}
  />
);
export const SelectedItem = () => (
  <Item
    item={item}
    isParent={false}
    isSelected
    onItemSelect={onItemSelect}
  />
);
