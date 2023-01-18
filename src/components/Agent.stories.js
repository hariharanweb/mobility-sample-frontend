import React from 'react';
import Agent from './Agent';

const agent = {
  name: 'Michael Jackson',
  gender: 'M',
  phone: '9876543210',
};
export default {
  title: 'Agent',
  component: Agent,
};
export const Primary = () => <Agent agent={agent} />;
