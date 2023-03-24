import React from 'react';
import Item from './Item';

const QuoteSummary = ({ bookingInformation }) => (
  <Item item={bookingInformation[0]?.message?.order?.items[0]} />
);

export default QuoteSummary;
