import React from 'react';
import './index.css';

export const Avatar = ({ image, mainText = '' }) => {
  return (
    <div className="avatar">
      <span>
        {image ? (
          <img style={{ objectFit: 'cover' }} src={image} />
        ) : (
          mainText[0]
        )}
      </span>
      <div>
        <span className="avatar-name">{mainText}</span>
      </div>
    </div>
  );
};
