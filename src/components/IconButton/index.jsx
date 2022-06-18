import React from 'react';
import './index.css';

export const IconButton = ({ style, children }) => {
  return (
    <button className="icon-button" style={style}>
      {children}
    </button>
  );
};
