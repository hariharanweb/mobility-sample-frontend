import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import StatusScreen from './StatusScreen';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('Status Screen', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({
      state: {
        message_id: '12345',
      },
    }));
    Api.poll = jest.fn().mockImplementation((getStatusResult) => getStatusResult());
  });
  it('Should display header and footer', () => {
    render(<StatusScreen />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
    expect(screen.getByText('Powered by Thoughtworks')).toBeInTheDocument();
  });
});
