import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const TableHeader = ({ style, toUpperCase, children }) => {
  return (
    <th className="th" style={style}>
      {toUpperCase ? children.toUpperCase() : children}
    </th>
  );
};

TableHeader.propTypes = {
  toUpperCase: PropTypes.bool,
};
