import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Table = ({
  children,
  title,
  subtitle,
  width,
  style,
  className,
}) => {
  return (
    <>
      {title ? <h1>{title}</h1> : <></>}
      {subtitle && <h2>{subtitle}</h2>}
      <table width={width} style={style} className={`table ${className}`}>
        {children}
      </table>
    </>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.any,
};
