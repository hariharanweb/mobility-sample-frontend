import React from 'react';
import {
  render, screen, act,
} from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Api from '../api/Api';
import ConfirmScreen from './ConfirmScreen';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('../api/Api');

describe('Confirm screen', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({
      state: {
        message_id: '12345',
      },
    }));
    Api.poll = jest.fn().mockImplementation((getConfirmResult) => getConfirmResult());
  });
  it('Should display Header and footer', () => {
    act(() => render(
      <ConfirmScreen />,
    ));
    expect(screen.getByAltText('ONDC')).toBeInTheDocument();
    expect(screen.getByText('Powered by Thoughtworks')).toBeInTheDocument();
  });
});
