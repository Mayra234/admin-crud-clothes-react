import React from 'react';
import './index.css';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div></div>
      <div>
        <Avatar mainText="Mayra" />
        <IconButton style={{ marginLeft: '20px' }}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </IconButton>
      </div>
    </div>
  );
};
