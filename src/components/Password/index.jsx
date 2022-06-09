import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';

export const Password = (props) => {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <input className="form-control" type="password" name={props.name} />
    </>
  );
};

Password.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
};
