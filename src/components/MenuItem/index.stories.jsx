import React from 'react';
import { MenuItem } from './index';

export default { title: 'Components/MenuItem' };
export const Overview = (args) => {
  return <MenuItem {...args} />;
};

Overview.args = {
  text: 'Dashboard',
  icon: 'house',
};
