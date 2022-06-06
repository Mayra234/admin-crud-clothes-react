import React from 'react';
import { SelectOption } from '.';

export default { title: 'Components/SelectOption' };
export const Overview = (args) => {
  return <SelectOption {...args} />;
};

Overview.args = {
  value: 'comida',
  text: 'comida',
};
