import React from 'react';
import './index.css';

export const TableRow = ({ style, children }) => {
  return (
    <tr className="tr" style={style}>
      {children}
    </tr>
  );
};
