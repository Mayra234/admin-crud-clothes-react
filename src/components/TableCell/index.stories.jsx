import React from 'react';
import { TableCell } from './index';

export default { title: 'Components/Avatar' };
export const Overview = (args) => {
  return <TableCell {...args} />;
};

Overview.args = {
  style: 'background: green',
  children: 'Mayra',
};
