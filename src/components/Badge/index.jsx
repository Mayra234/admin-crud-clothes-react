import React from 'react';
import './index.css';

export const Badge = ({ children, style }) => {
  return (
    <span className="badge" style={style}>
      {children}
    </span>
  );
};
