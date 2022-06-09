import React from 'react';
import './index.css';

export const TableCell = ({ style, children }) => {
  return <td style={{ style }}>{children}</td>;
};

TableCell.propTypes = {
  children: PropTypes.string,
};
