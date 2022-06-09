import React from 'react';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';
import { TableBody } from './index';

export default { title: 'Components/TableBody' };
export const Overview = () => {
  return (
    <table>
      <TableBody>
        <TableRow>
          <TableCell>Mayra</TableCell>
          <TableCell>Mario</TableCell>
          <TableCell>Angélica</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mayra</TableCell>
          <TableCell>Mario</TableCell>
          <TableCell>Angélica</TableCell>
        </TableRow>
      </TableBody>
    </table>
  );
};
