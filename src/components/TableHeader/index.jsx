import React from 'react';
import './index.css';

export const TableHeader = ({ style, text }) => {
  return <th style={{ style }}>{text.toUpperCase()}</th>;
};
