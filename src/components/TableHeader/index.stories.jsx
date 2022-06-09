import React from 'react';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';
import { TableHeader } from './index';

export default { title: 'Components/TableHeader' };
export const Overview = (args) => {
  return (
    <table>
      <thead>
        <TableRow>
          <TableHeader>nombre</TableHeader>
          <TableHeader toUpperCase={true}>edad</TableHeader>
          <TableHeader toUpperCase>teléfono</TableHeader>
        </TableRow>
      </thead>
      <TableBody>
        <TableRow>
          <TableCell>Mayra</TableCell>
          <TableCell>21</TableCell>
          <TableCell>325896115</TableCell>
        </TableRow>
      </TableBody>
    </table>
  );
};

Overview.args = {
  children: 'Hola',
};
