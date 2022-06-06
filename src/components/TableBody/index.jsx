import React from 'react';
import './index.css';
import { TableRow } from '../TableRow';
import { FIELDS } from '../../constants/fields';

export const TableBody = () => {
  return <tbody>{TableRow({ fields: FIELDS })}</tbody>;
};
