import React from 'react';

import Invoice from './Invoice';

export default {
  title: 'Invoice',
  component: Invoice,
};
const order = {};
export const Primary = () => (
  <Invoice
    order={order}
    driverName="Venkatesh"
    fromLocation="Forum Mall"
    toLocation="Thoughtworks"
  />
);
