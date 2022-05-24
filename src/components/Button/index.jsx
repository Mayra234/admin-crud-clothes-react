import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Button = ({ disabled, style, children }) => {
  return (
    <button style={style} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
};
