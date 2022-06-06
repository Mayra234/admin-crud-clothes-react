import React from 'react';
import './index.css';

export const IconButton = ({ icon, style }) => {
  return (
    <button style={{ style }} className={'icon-button fa-solid fa-' + icon} />
  );
};
