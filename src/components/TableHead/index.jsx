import React from 'react';
import { TableHeader } from '../TableHeader';
import './index.css';

export const TableHead = ({ style, headers = [] }) => {
  return (
    <thead>
      {headers
        .map((header) => TableHeader({ style, text: header.text }))
        .join('')}
    </thead>
  );
};
