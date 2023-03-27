import {
  waitFor,
} from '@testing-library/react';
import Api from './Api';

describe('Api', () => {
  it('Should do post call with url and body', async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: { id: 123 } }),
    }));
    const response = await Api.post('/sample-api-endpoint', { data: '523' });
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('/sample-api-endpoint', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: '523' }),
      });
      expect(response).toEqual({ data: { id: 123 } });
    });
  });
  it('Should do get call with url and query paramters', async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: { id: 123 } }),
    }));
    const response = await Api.get('/sample-api-endpoint', { data: '234' });
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('/sample-api-endpoint?data=234');
      expect(response).toEqual({ data: { id: 123 } });
    });
  });
  it('Should not do poll with call function, zero times and 1500ms delay', async () => {
    const sampleFunction = jest.fn();
    Api.poll(sampleFunction, 0, 1500);
    await waitFor(() => {
      expect(sampleFunction).toHaveBeenCalledTimes(0);
    });
  });
  it('Should do poll 2 times with call function, 3 times and 1500ms delay', async () => {
    const sampleFunction = jest.fn().mockImplementation(() => 1);
    jest.useFakeTimers();
    Api.poll(sampleFunction, 3, 1500);
    expect(sampleFunction).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1500);
    expect(sampleFunction).toHaveBeenCalledTimes(2);
  }, 1500);
});
