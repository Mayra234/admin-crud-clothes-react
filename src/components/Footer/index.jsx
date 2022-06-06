import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Footer = ({ children, style }) => {
  return <footer style={{ style }}>{children}</footer>;
};
