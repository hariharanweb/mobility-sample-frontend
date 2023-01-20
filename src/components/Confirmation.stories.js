import React from 'react';

import Confirmation from './Confirmation';

export default {
  title: 'Confirmation',
  component: Confirmation,
};
const order = {};
export const Primary = () => (
  <Confirmation
    order={order}
    driverName="Venkatesh"
    fromLocation="Forum Mall"
    toLocation="Thoughtworks"
  />
);
