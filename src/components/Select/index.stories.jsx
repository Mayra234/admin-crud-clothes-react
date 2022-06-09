import React from 'react';
import { Select } from '.';

export default { title: 'Components/Select' };
export const Overview = () => {
  return (
    <Select
      options={[
        { text: 'Seleccionar...' },
        { value: 1, text: 'Mayra' },
        { value: 2, text: 'Angélica' },
      ]}
    />
  );
};
