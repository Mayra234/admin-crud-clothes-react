import React from 'react';
import { Switch } from '../Switch';

export default { title: 'Components/Switch' };
export const Overview = () => {
  return (
    <Switch
      label="Alternar este elemento de interruptor"
      name="maritalStatus"
      disabled={false}
    />
  );
};
