import React from 'react';
import { Card } from './index';

export default { title: 'Components/Card' };
export const Overview = (args) => {
  return <Card {...args} />;
};

Overview.args = {
  content: 'Alejandra',
};
