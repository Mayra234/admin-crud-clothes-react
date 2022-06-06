import React from 'react';
import { TableHeader } from './index';

export default { title: 'Components/TableHeader' };
export const Overview = (args) => {
  return <TableHeader {...args} />;
};

Overview.args = {
  text: 'Hola',
  style: 'background: red',
};
