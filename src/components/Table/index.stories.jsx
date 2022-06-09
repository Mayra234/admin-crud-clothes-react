import React from 'react';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHead } from '../TableHead';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { Table } from './index';

export default { title: 'Components/Table' };
export const Overview = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Nombre</TableHeader>
          <TableHeader>Edad</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Mayra</TableCell>
          <TableCell>21</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const OverviewTwo = () => {
  return (
    <Table title="Tabla" subtitle="Persona">
      <TableHead>
        <TableRow>
          <TableHeader>Nombre</TableHeader>
          <TableHeader>Edad</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Angélica</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
