import React from 'react';
import { Footer } from './index';

export default { title: 'Components/Footer' };
export const Overview = (args) => {
  return <Footer {...args} />;
};

Overview.args = {
  children: '2022 © Hyper - Coderthemes.com',
};
