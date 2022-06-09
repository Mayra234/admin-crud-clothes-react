import React from 'react';
import { Input } from './index';

export default { title: 'Components/Input' };
export const TextInput = (args) => {
  return <Input {...args} />;
};

TextInput.args = {
  type: 'text',
  label: 'Name',
};

export const NumberInput = (args) => {
  return <Input {...args} />;
};

NumberInput.args = {
  type: 'number',
  label: 'Age',
};
