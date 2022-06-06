import React from 'react';
import './index.css';

export const SelectOption = ({ text, value }) => {
  return <option value={value}>{text}</option>;
};
