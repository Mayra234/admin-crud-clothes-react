import React from 'react';
import { Navbar } from './index';

export default { title: 'Components/Navbar' };
export const Overview = (args) => {
  return <Navbar {...args} />;
};

Overview.args = {
  mainText: 'Mayra Alejandra',
  icon: 'arrow-right-from-bracket',
};
