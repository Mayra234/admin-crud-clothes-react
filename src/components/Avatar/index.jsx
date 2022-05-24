import React from 'react';
import PropTypes from 'prop-types';
import 'index.css';

export const Avatar = ({ image, mainText }) => {
  return (
    <div class="avatar">
      <span>
        {image
          ? /*html */ `<img src="${image}" alt="${mainText}" />`
          : `${mainText[0]}`}
      </span>
      <div>
        <span class="avatar-name">{mainText}</span>
        <a>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </a>
      </div>
    </div>
  );
};
