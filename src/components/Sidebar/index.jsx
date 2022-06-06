import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Sidebar = ({ style, children }) => {
  return (
    <div className="content-menu" style={{ style }}>
      {children}
    </div>
  );
};
