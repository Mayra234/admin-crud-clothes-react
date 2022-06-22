import React from 'react';
import './index.css';

export const Header = ({ children, style }) => {
  return (
    <div className="container-header" style={style}>
      {children}
    </div>
  );
};
