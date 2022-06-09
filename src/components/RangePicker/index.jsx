import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';

export const RangePicker = (props) => {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <input
        style={props.style}
        className="form-control"
        type="range"
        min={props.min}
        max={props.max}
        name={props.name}
      />
    </>
  );
};

RangePicker.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  name: PropTypes.string,
};
