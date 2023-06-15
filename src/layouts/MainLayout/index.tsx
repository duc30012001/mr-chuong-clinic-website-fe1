import React from 'react';
import { Outlet } from 'react-router-dom';

export type MainLayoutProps = {
  children: React.ReactElement;
};

function MainLayout() {
  return (
    <div>
      MainLayout
      <Outlet />
    </div>
  );
}

export default MainLayout;
