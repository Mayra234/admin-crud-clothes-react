import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Header = ({ children, style }) => {
  return (
    <div class="container-header" style={style}>
      {children}
    </div>
  );
};
