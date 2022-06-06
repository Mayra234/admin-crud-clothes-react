import React from 'react';
import { TableRow } from './index';

export default { title: 'Components/TableRow' };
export const Overview = (args) => {
  return <TableRow {...args} />;
};

Overview.args = {
  style: 'background: pink',
  fields: [{ text: 'Johana' }],
};
