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
const trainCatalog = {
  'bpp/descriptor': {
    name: 'IRCTC',
    code: 'IRCTC',
  },
  'bpp/providers': [
    {
      id: 'IRCTC',
      descriptor: {
        name: 'IRCTC',
        images: [
          'https://www.irctc.co.in/nget/assets/images/secondry-logo.png',
        ],
      },
      categories: [
        {
          id: '3A',
          description: '3 AC',
        },
        {
          id: '2A',
          description: '2 AC',
        },
        {
          id: '1A',
          description: '1 AC',
        },
      ],
      items: [
        {
          id: 'TRAIN_22222',
          descriptor: {
            name: 'CSMT RAJDHANI',
            code: 'TRAIN_22222',
          },
          price: {
            currency: 'INR',
            minimum_value: '825',
            maximum_value: '1560',
          },
          time: {
            range: {
              start: '2023-01-09T16:55:00+00:00',
              end: '2023-01-09T18:45:00+00:00',
            },
          },
        },
        {
          id: 'TRAIN_22222_3A',
          parent_item_id: 'TRAIN_22222',
          descriptor: {
            name: 'CSMT RAJDHANI 3A',
            code: 'TRAIN_22222_3A',
          },
          price: {
            currency: 'INR',
            value: '825',
          },
          time: {
            range: {
              start: '2023-01-09T16:55:00+00:00',
              end: '2023-01-09T18:45:00+00:00',
            },
          },
          category_id: '3A',
        },
        {
          id: 'TRAIN_22222_2A',
          parent_item_id: 'TRAIN_22222',
          descriptor: {
            name: 'CSMT RAJDHANI 2A',
            code: 'TRAIN_22222_2A',
          },
          price: {
            currency: 'INR',
            value: '1250',
          },
          time: {
            range: {
              start: '2023-01-09T16:55:00+00:00',
              end: '2023-01-09T18:45:00+00:00',
            },
          },
          category_id: '2A',
        },
        {
          id: 'TRAIN_22222_1A',
          parent_item_id: 'TRAIN_22222',
          descriptor: {
            name: 'CSMT RAJDHANI 1A',
            code: 'TRAIN_22222_1A',
          },
          price: {
            currency: 'INR',
            value: '1560',
          },
          time: {
            range: {
              start: '2023-01-09T16:55:00+00:00',
              end: '2023-01-09T18:45:00+00:00',
            },
          },
          category_id: '1A',
        },
      ],
    },
  ],
};
export default {
  title: 'Catalog',
  component: Catalog,
};

export const Primary = () => <Catalog catalog={catalog} />;
export const ParentChild = () => <Catalog catalog={trainCatalog} />;
