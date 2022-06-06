import React from 'react';
import './index.css';
import { SelectOption } from '../SelectOption';

export const Select = ({ children, items = [] }) => {
  return (
    <select className="form-control">
      {items
        .map((item) => SelectOption({ text: item.text, value: item.value }))
        .join('')}
    </select>
  );
};
