import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Avatar = ({ image, mainText }) => {
  return (
    <div class="avatar">
      <span>
        {image ? (
          <img style={{ objectFit: 'cover' }} src={image} />
        ) : (
          mainText[0]
        )}
      </span>
      <div>
        <span class="avatar-name">{mainText}</span>
      </div>
    </div>
  );
};
