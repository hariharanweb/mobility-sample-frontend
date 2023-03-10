import React from 'react';
import TravelClassList from './TravelClassList';

export default {
  title: 'TravelClassList',
  component: TravelClassList,
};
const travelClassList = [
  {
    travel_class_id: '3A',
    travel_class_name: '3 AC',
    fare_type: 'Quantity',
    availability: '20 WL',
    fare_categories: [
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
    ],
  },
  {
    travel_class_id: '2A',
    travel_class_name: '2 AC',
    fare_type: 'Quantity',
    availability: '10 WL',
    fare_categories: [
      {
        fare_category_id: 'ADULT_FARE',
        fare_category_name: 'Adult',
        price: {
          value: 1025,
          currency: 'INR',
        },
      },
      {
        fare_category_id: 'CHILD_FARE',
        fare_category_name: 'Child',
        price: {
          value: 800,
          currency: 'INR',
        },
      },
      {
        fare_category_id: 'SENIOR_FARE',
        fare_category_name: 'Senior',
        price: {
          value: 700,
          currency: 'INR',
        },
      },
    ],
  },
  {
    travel_class_id: '1A',
    travel_class_name: '1 AC',
    fare_type: 'Quantity',
    availability: '10',
    fare_categories: [
      {
        fare_category_id: 'ADULT_FARE',
        fare_category_name: 'Adult',
        price: {
          value: 1560,
          currency: 'INR',
        },
      },
      {
        fare_category_id: 'CHILD_FARE',
        fare_category_name: 'Child',
        price: {
          value: 1200,
          currency: 'INR',
        },
      },
      {
        fare_category_id: 'SENIOR_FARE',
        fare_category_name: 'Senior',
        price: {
          value: 1000,
          currency: 'INR',
        },
      },
    ],
  },
];
export const Primary = () => <TravelClassList travelClassList={travelClassList} />;
