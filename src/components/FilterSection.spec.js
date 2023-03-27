import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterSection from './FilterSection';

describe('Filter Section', () => {
  it('Should display the filter section', () => {
    render(<FilterSection />);
    expect(screen.getByText('Cabs')).toBeInTheDocument();
    expect(screen.getByText('Trains')).toBeInTheDocument();
  });

  it('Should trigger on cabs select', () => {
    const onCategoryChange = jest.fn();
    render(<FilterSection onCategoryChange={onCategoryChange} />);
    fireEvent.click(screen.getByText('Cabs'));
    expect(onCategoryChange).toHaveBeenCalledWith('cabs');
  });
  it('Should trigger on trains select', () => {
    const onCategoryChange = jest.fn();
    render(<FilterSection onCategoryChange={onCategoryChange} />);
    fireEvent.click(screen.getByText('Trains'));
    expect(onCategoryChange).toHaveBeenCalledWith('trains');
  });

  it('Should select trains select', () => {
    const onCategoryChange = jest.fn();
    render(<FilterSection category="trains" onCategoryChange={onCategoryChange} />);
    expect(screen.getByTestId('trains').hasAttribute('aria-pressed')).toBeTruthy();
  });
  it('Should select cabs select', () => {
    const onCategoryChange = jest.fn();
    render(<FilterSection category="cabs" onCategoryChange={onCategoryChange} />);
    expect(screen.getByTestId('cabs').hasAttribute('aria-pressed')).toBeTruthy();
  });
});
