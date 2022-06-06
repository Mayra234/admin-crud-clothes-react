import React from 'react';
import './index.css';
import { MenuItem } from '../MenuItem';

export const ListItems = ({ items = [] }) => {
  return (
    <div>
      {items
        .map((item) => MenuItem({ icon: item.icon, text: item.text }))
        .join('')}
    </div>
  );
};
