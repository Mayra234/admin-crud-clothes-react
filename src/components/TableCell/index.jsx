import React from 'react';
import './index.css';

export const TableCell = ({ style, text }) => {
  return <td style={{ style }}>{text}</td>;
};
