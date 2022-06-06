import React from 'react';
import { IconButton } from './index';

export default { title: 'Components/IconButton' };
export const Overview = (args) => {
  return <IconButton {...args} />;
};

Overview.args = {
  icon: 'arrow-right-from-bracket',
};
