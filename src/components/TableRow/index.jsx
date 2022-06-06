import React from 'react';
import { TableCell } from '../TableCell';
import './index.css';

export const TableRow = ({ style, fields = [] }) => {
  return (
    <tr>
      {fields.map((field) => TableCell({ style, text: field.text })).join('')}
    </tr>
  );
};
