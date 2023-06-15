import React from 'react';
import { Outlet } from 'react-router-dom';

export type AuthLayoutProps = {
  children: React.ReactElement;
};

function AuthLayout() {
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
}

export default AuthLayout;
