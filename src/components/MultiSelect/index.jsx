import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { SelectOption } from '../SelectOption';

export const MultiSelect = (props) => {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <select
        multiple
        className="form-control"
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

MultiSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
};
