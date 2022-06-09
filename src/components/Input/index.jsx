import React from 'react';
import { Label } from '../Label';

export const Input = ({ type, value, name, label }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <input className="form-control" type={type} value={value} name={name} />
    </>
  );
};
