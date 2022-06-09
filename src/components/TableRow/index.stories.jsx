import React from 'react';
import { TableCell } from '../TableCell';
import { TableRow } from './index';

export default { title: 'Components/TableRow' };
export const Overview = () => {
  return (
    <table>
      <TableRow>
        <TableCell>Mayra</TableCell>
        <TableCell>Mario</TableCell>
        <TableCell>Maria</TableCell>
      </TableRow>
    </table>
  );
};
