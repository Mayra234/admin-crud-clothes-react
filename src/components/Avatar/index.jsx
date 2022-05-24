import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Avatar = ({ mainText }) => {
  return (
    <div class="avatar">
      <span></span>
      <div>
        <span class="avatar-name">{mainText}</span>
      </div>
    </div>
  );
};
