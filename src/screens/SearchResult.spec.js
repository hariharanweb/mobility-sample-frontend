import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import SearchResult from './SearchResult';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('SearchResult Screen', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({
      state: {
        message_id: '12345',
        locations: [],
        locationMap: {},
      },
    }));
    Api.poll = jest.fn().mockImplementation((getInitResult) => getInitResult());
  });
  it('Should display header', () => {
    render(<SearchResult />);
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
  });
});
