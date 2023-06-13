import React from 'react';

type AuthLayoutProps = {
  children: React.ReactElement;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
}

export default AuthLayout;
