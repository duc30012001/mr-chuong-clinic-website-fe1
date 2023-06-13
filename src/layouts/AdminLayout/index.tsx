import React from 'react';

type AdminLayoutProps = {
  children: React.ReactElement;
};

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      AdminLayout
      {children}
    </div>
  );
}

export default AdminLayout;
