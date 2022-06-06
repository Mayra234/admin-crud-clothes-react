import React from 'react';
import './index.css';

export const Input = ({ type, style, children }) => {
  return <input className="form-control" type={type} style={{ style }} />;
};
