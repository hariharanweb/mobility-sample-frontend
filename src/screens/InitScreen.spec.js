import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import InitScreen from './InitScreen';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('InitScreen Screen', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({
      state: {
        message_id: '12345',
        locations: [],
      },
    }));
    Api.poll = jest.fn().mockImplementation((getInitResult) => getInitResult());
  });
  it('Should display header', () => {
    render(<InitScreen />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
  });
});
