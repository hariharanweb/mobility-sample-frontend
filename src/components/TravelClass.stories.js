import React from 'react';
import TravelClass from './TravelClass';

export default {
  title: 'TravelClass',
  component: TravelClass,
};
const travelClassDetails = {
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
};
export const Primary = () => <TravelClass travelClass={travelClassDetails} />;
