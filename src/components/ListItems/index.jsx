import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '../MenuItem';

export const ListItems = (items) => {
  return (
    <div>
      {items
        .map((item) => {
          MenuItem({ text: item.text, icon: item.icon });
        })
        .join('')}
    </div>
  );
};

ListItems.propTypes = {
  items: PropTypes.array,
};
