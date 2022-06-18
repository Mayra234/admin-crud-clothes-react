import React from 'react';
import { Switch } from '../Switch';

export default { title: 'Components/Switch' };
export const Overview = (args) => {
  return <Switch {...args} />;
};
Overview.args = {
  label: 'Alternar interruptor',
  name: 'switch',
  disabled: false,
};
