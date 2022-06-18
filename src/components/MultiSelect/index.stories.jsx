import React from 'react';
import { MultiSelect } from '.';

export default { title: 'Components/MultiSelect' };
export const Overview = () => {
  return (
    <MultiSelect
      label="Alimentos"
      options={[
        { value: 'papa', text: 'Papa' },
        { value: 'yuca', text: 'Yuca' },
        { value: 'arroz', text: 'Arroz' },
        { value: 'a', text: 'a' },
        { value: 'b', text: 'b' },
      ]}
    />
  );
};
