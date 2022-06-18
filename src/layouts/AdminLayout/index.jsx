import React from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { ListItems } from '../../components/ListItems';
import { Content } from '../../components/Content';
import { SIDEBAR_MENU } from '../../constants/menus';

export const AdminLayout = ({ children }) => {
  return (
    <div class="admin-layout">
      <div>
        <Header>
          <Navbar />
        </Header>
      </div>
      <div class="main-container">
        <div>
          <Sidebar>
            <ListItems items={SIDEBAR_MENU} />
          </Sidebar>
        </div>
        <div>
          <Content>{children}</Content>
        </div>
      </div>
    </div>
  );
};
