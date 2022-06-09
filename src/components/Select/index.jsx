import React from 'react';
import PropTypes from 'prop-types';
import { SelectOption } from '../SelectOption';

export const Select = ({ props }) => {
  return (
    <select className={'form-control' + props.className} name={props.name}>
      {props.options
        .map((option) =>
          SelectOption({ text: option.text, value: option.value })
        )
        .join('')}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  name: PropTypes.string,
};
