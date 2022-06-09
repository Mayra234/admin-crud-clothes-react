import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';

export const Switch = (props) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={props.name} />
      {props.label && <Label>{props.label}</Label>}
    </div>
  );
};

Switch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
