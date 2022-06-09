import React from 'react';
import { RangePicker } from '.';

export default { title: 'Components/RangePicker' };
export const Overview = () => {
  return (
    <RangePicker
      style={{ background: '#727cf5' }}
      name="range"
      label="Promedio"
      min="0%"
      max="100%"
    />
  );
};
