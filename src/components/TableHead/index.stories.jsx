import React from 'react';
import { TableHead } from './index';

export default { title: 'Components/TableHead' };
export const Overview = (args) => {
  return <TableHead {...args} />;
};

Overview.args = {
  style: 'background: red',
  headers: [{ text: 'Nombre' }],
};
