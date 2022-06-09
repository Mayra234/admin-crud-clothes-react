import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';

export const DatePicker = (props) => {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <input className="form-control" type="date" name={props.name} />
    </>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string,
};
