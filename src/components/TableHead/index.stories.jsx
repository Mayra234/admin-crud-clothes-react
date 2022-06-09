import React from 'react';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { TableHead } from './index';

export default { title: 'Components/TableHead' };
export const Overview = (args) => {
  return (
    <table>
      <TableHead>
        <TableRow>
          <TableHeader>Hola</TableHeader>
        </TableRow>
      </TableHead>
    </table>
  );
};
