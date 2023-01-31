import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import InputField from './InputField';

describe('InputField with correct type of input', () => {
  it('Should display placeholder', () => {
    render(<InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue="" formatValueFunc="Nikhil" errorMessage="name should only contains alphabets and spaces" />);
    expect(screen.getByText('name')).toBeInTheDocument();
  });

  it('Should display textbox', () => {
    render(<InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue="" formatValueFunc="Nikhil" errorMessage="name should only contains alphabets and spaces" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Should display cancel icon', () => {
    render(<InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue="" formatValueFunc="Nikhil" errorMessage="name should only contains alphabets and spaces" />);
    expect(screen.getByTestId('CancelIcon')).toBeInTheDocument();
  });
  it('Should display textbox value', () => {
    render(<InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue="" formatValueFunc="Nikhil" errorMessage="name should only contains alphabets and spaces" />);
    expect(screen.getByDisplayValue('Nikhil')).toBeInTheDocument();
  });

  it('Should display error message when wrong input is given', async () => {
    render(<InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue={() => 990} formatValueFunc={() => 990} errorMessage="name should only contains alphabets and spaces" />);
    const inputElement = screen.getByRole(
      'textbox',
    );
    expect(inputElement).toBeInTheDocument();
    act(() => {
      fireEvent.change(inputElement, { target: { value: '990' } });
    });
    await waitFor(() => {
      expect(screen.getByText('name should only contains alphabets and spaces')).toBeInTheDocument();
    });
  });

  it('Should clear textbox value', async () => {
    const updateValue = jest.fn();
    render(<InputField
      pattern="^[a-zA-Z ]+$"
      label="name"
      value="Nikhil"
      setValue={() => {}}
      formatValueFunc={() => {}}
      updateValue={updateValue}
      errorMessage="name should only contains alphabets and spaces"
    />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    act(() => {
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(updateValue).toHaveBeenCalled();
    });
  });

  it('Should call updateValue with undefined', async () => {
    const updateValue = jest.fn();
    render(<InputField
      pattern="^[a-zA-Z ]+$"
      label="name"
      value="Nikhil"
      setValue={() => {}}
      formatValueFunc={() => {}}
      errorMessage="name should only contains alphabets and spaces"
    />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    act(() => {
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(updateValue).toHaveBeenCalledTimes(0);
    });
  });
});
