import React from 'react';
import Price from './Price';

export default {
  title: 'Price',
  component: Price,
};

const price = {
  currency: 'INR',
  minimum_value: '755',
  maximum_value: '1485',
};

export const Primary = () => <Price price={price} variant="medium" />;
