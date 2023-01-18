import React from 'react';
import { render, screen } from '@testing-library/react';
import Agent from './Agent';

describe('Agent', () => {
  const agent = {
    name: 'Michael Jackson',
    gender: 'M',
    phone: '9876543210',
  };
  it('Should display name', () => {
    render(<Agent agent={agent} />);
    expect(screen.getByText(agent.name)).toBeInTheDocument();
  });
  it('Should display name', () => {
    render(<Agent agent={agent} />);
    expect(screen.getByText(agent.phone)).toBeInTheDocument();
  });
});
