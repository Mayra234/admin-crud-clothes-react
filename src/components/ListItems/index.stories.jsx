import React from 'react';
import { ListItems } from './index';

export default { title: 'Components/ListItems' };
export const Overview = (args) => {
  return <ListItems {...args} />;
};

Overview.args = {
  icon: 'home',
  text: 'Casa',
};
