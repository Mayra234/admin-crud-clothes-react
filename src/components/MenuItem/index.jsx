import React from 'react';
import './index.css';

export const MenuItem = ({ style, icon, text }) => {
  return (
    <div class="menu-item">
      <div>
        <a style={{ style }}>
          <i className={'fa-solid fa-' + icon}></i>
          <p>{text}</p>
        </a>
      </div>
    </div>
  );
};
