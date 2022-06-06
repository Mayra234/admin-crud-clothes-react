import React from 'react';
import { Input } from './index';

export default { title: 'Components/Input' };
export const Overview = (args) => {
  return <Input {...args} />;
};

Overview.args = {
  type: 'text',
};
