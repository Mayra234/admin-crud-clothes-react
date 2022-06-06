import React from 'react';
import { Sidebar } from './index';

export default { title: 'Components/Sidebar' };
export const Overview = (args) => {
  return <Sidebar {...args} />;
};

Overview.args = {
  style: 'background: blue ',
};
