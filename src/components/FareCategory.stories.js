import React from 'react';
import FareCategory from './FareCategory';

export default {
  title: 'FareCategory',
  component: FareCategory,
};
const fareCategoryDetails = {
  fare_category_id: 'ADULT_FARE',
  fare_category_name: 'Adult',
  price: {
    value: 825,
    currency: 'INR',
  },
};
export const Primary = () => <FareCategory fareCategory={fareCategoryDetails} />;
