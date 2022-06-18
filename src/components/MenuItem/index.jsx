import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export const MenuItem = ({ style, icon, text, to = '' }) => {
  return (
    <div class="menu-item">
      <div>
        <Link style={{ style }} to={to}>
          {icon && <i className={'fa-solid fa-' + icon}></i>}
          <p>{text}</p>
        </Link>
      </div>
    </div>
  );
};
