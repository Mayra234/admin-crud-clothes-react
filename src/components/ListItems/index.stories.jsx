import React from 'react';
import { ListItems } from './index';

export default { title: 'Components/ListItems' };

export const Overview = () => {
  return (
    <ListItems>
      {
        (items = [
          {
            icon: 'home',
            text: 'Inicio',
          },
          {
            icon: 'crown',
            text: 'Materiales',
          },
        ])
      }
    </ListItems>
  );
};
