import React from 'react';
import './index.css';

export const Card = ({ style, children }) => {
  return (
    <div id="card" style={{ style }}>
      <div class="body-card">{children}</div>
    </div>
  );
};
