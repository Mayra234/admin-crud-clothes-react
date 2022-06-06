import React from 'react';
import './index.css';

export const Label = ({ style, children }) => {
  return (
    <label style={{ style }} class="form-label">
      {children}
    </label>
  );
};
