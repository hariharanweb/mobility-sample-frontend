import React from 'react';

import Catalog from './Catalog';

const catalog = {
  'bpp/descriptor': {
    name: 'Fake Taxi',
    code: 'FAKE_TAXI',
  },
  'bpp/providers': [
    {
      id: 'FAKE_TAXI',
      descriptor: {
        name: "Fake Taxi's",
        long_desc: 'We are fake',
        images: [
          'https://ih1.redbubble.net/image.925211637.3466/flat,128x,075,f-pad,128x128,f8f8f8.jpg',
        ],
      },
      locations: [
        {
          id: 'FAKE_TAXI_LOCATION_ID',
          gps: '12.973614,77.608548',
        },
      ],
      categories: [
        {
          id: 'FAKE_TAXI_SEDAN',
          descriptor: {
            name: 'Sedan Taxi',
          },
        },
        {
          id: 'FAKE_TAXI_SUV',
          descriptor: {
            name: 'SUV Taxi',
          },
        },
      ],
      items: [
        {
          id: 'FAKE_SEDAN_ID',
          fulfillment_id: 'FAKE_SEDAN_FULFILLMENT_ID',
          descriptor: {
            name: 'Sedan Taxi',
            code: 'SEDAN_TAXI',
            images: [
              'https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png',
            ],
          },
          price: {
            currency: 'INR',
            value: '111',
          },
          category_id: 'FAKE_TAXI_SEDAN',
        },
        {
          id: 'FAKE_SUV_ID',
          fulfillment_id: 'FAKE_SUV_FULFILLMENT_ID',
          descriptor: {
            name: 'SUV Taxi',
            code: 'SUV_TAXI',
            images: [
              'https://cdn.iconscout.com/icon/premium/png-256-thumb/taxi-2716987-2254385.png',
            ],
          },
          price: {
            currency: 'INR',
            value: '141',
          },
          category_id: 'FAKE_TAXI_SUV',
        },
      ],
    },
  ],
  'bpp/fulfillments': [
    {
      tracking: false,
      start: {
        location: {
          gps: '12.934845,77.610949',
        },
      },
      end: {
        location: {
          gps: '13.011058,77.555064',
        },
      },
    },
  ],
};
export default {
  title: 'Catalog',
  component: Catalog,
};

export const Primary = () => <Catalog catalog={catalog}>Button</Catalog>;
