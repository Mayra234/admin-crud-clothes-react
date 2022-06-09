import React from 'react';

export const Input = ({ type, value, name }) => {
  return (
    <input className="form-control" type={type} value={value} name={name} />
  );
};
