import React from 'react';
import FareCategoryList from './FareCategoryList';

export default {
  title: 'FareCategoryList',
  component: FareCategoryList,
};

const fareCategoryList = [
  {
    fare_category_id: 'ADULT_FARE',
    fare_category_name: 'Adult',
    price: {
      value: 825,
      currency: 'INR',
    },
  },
  {
    fare_category_id: 'CHILD_FARE',
    fare_category_name: 'Child',
    price: {
      value: 600,
      currency: 'INR',
    },
  },
  {
    fare_category_id: 'SENIOR_FARE',
    fare_category_name: 'Senior',
    price: {
      value: 500,
      currency: 'INR',
    },
  },
];

export const Primary = () => <FareCategoryList fareCategoryList={fareCategoryList} />;
