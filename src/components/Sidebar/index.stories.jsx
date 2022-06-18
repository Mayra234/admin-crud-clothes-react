import React from 'react';
import { ListItems } from '../ListItems';
import { Sidebar } from './index';

export default { title: 'Components/Sidebar' };
export const Overview = () => {
  return <Sidebar />;
};

export const SidebarWithMenuItems = () => {
  return (
    <Sidebar>
      <ListItems
        items={[
          { icon: '', text: 'Hola' },
          { icon: '', text: 'Hola2', to: '' },
          { icon: '', text: 'Hola3', to: '' },
        ]}
      />
    </Sidebar>
  );
};
