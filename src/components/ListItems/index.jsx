import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '../MenuItem';

export const ListItems = (props) => {
  return (
    <>
      {props.items.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </>
  );
};

ListItems.propTypes = {
  items: PropTypes.array,
};
