import React from 'react';
import InputField from './InputField';

export default {
  title: 'InputField',
  component: InputField,
};

export const Primary = () => <InputField pattern="^[a-zA-Z ]+$" label="name" value="Nikhil" setValue="" formatValueFunc="Nikhil" errorMessage="name should only contains alphabets and spaces" />;
