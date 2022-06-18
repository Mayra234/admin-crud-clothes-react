import React from 'react';
import PropTypes from 'prop-types';
import { SelectOption } from '../SelectOption';
import { Label } from '../Label';

export const Select = (props) => {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <select
        className={`form-control ${props.className}`}
        name={props.name}
        value={props.value}
      >
        {props.options.map((option) => (
          <SelectOption {...option} />
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
};
