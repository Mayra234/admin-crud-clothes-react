import React from 'react';
import { Select } from '.';

export default { title: 'Components/Select' };
export const Overview = (args) => {
  return <Select {...args} />;
};

Overview.args = {
  items: [
    { text: 'Seleccionar...' },
    { value: 'casa', text: 'Casa' },
    { value: 'comida', text: 'Comida' },
  ],
};
