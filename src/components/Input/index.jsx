import React from 'react';
import { Label } from '../Label';

export const Input = ({
  type,
  value,
  name,
  label,
  id,
  icon,
  style,
  placeholder,
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <div className="input-group">
        {icon && (
          <span className="input-group-text" id={id}>
            {icon}
          </span>
        )}
        <input
          style={style}
          className="form-control"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
