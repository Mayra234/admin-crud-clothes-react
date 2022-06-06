import React from 'react';
import './index.css';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';

export const Navbar = () => {
  return (
    <div class="navbar">
      <div></div>
      <div>
        {Avatar({ mainText: 'Mayra Alejandra' })}
        {IconButton({
          icon: 'arrow-right-from-bracket',
          style: 'margin-right: 10px',
        })}
      </div>
    </div>
  );
};
