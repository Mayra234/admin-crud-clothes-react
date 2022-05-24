import React from 'react';
import { Button } from './index';

export default { title: 'Components/Button' };
export const DisabledButton = () => {
  return (
    <Button disabled={false} style={{ color: 'white' }}>
      Hola 2
    </Button>
  );
};

export const YellowButton = () => {
  return (
    <Button disabled={true} style={{ background: 'yellow' }}>
      Hola2
    </Button>
  );
};

export const Overview = (args) => {
  return <Button {...args} />;
};

Overview.args = {
  disabled: true,
  children: 'Hola mundo',
};
