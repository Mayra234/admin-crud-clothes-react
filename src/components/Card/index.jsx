import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Card = ({ style, content }) => {
  return (
    <div id="card" style={style}>
      <div class="body-card">{content}</div>
    </div>
  );
};
