import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import TrackScreen from './TrackScreen';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('Track Screen', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({
      state: {
        message_id: '12345',
      },
    }));
    Api.poll = jest.fn().mockImplementation((getTrackResult) => getTrackResult());
  });
  it('Should display header and footer', () => {
    render(<TrackScreen />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
    expect(screen.getByText('Powered by Thoughtworks')).toBeInTheDocument();
  });
});
