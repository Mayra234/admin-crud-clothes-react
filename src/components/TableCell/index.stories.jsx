import React from 'react';
import { TableCell } from './index';

export default { title: 'Components/TableCell' };
export const Overview = (args) => {
  return (
    <table>
      <tr>
        <TableCell {...args} />
      </tr>
    </table>
  );
};

Overview.args = {
  children: 'Mayra',
};
