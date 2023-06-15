import React from 'react';
import { Outlet } from 'react-router-dom';

export type AdminLayoutProps = {
  children: React.ReactElement;
};

function AdminLayout() {
  return (
    <div>
      AdminLayout
      <Outlet />
    </div>
  );
}

export default AdminLayout;
