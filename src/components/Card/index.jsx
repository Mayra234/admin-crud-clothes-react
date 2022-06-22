import React from 'react';
import './index.css';

export const Card = ({ style, children }) => {
  return (
    <div id="card" style={{ style }}>
      <div className="body-card">{children}</div>
    </div>
  );
};
