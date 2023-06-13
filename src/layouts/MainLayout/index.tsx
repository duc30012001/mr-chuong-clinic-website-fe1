import React from 'react';

type MainLayoutProps = {
  children: React.ReactElement;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      MainLayout
      {children}
    </div>
  );
}

export default MainLayout;
