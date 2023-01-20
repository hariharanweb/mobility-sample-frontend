import React from 'react';
import Time from './Time';

export default {
  title: 'Time',
  component: Time,
};

const time = {
  range: {
    start: '2023-01-09T16:55:00+00:00',
    end: '2023-01-09T18:45:00+00:00',
  },
};

export const Primary = () => <Time time={time} />;
