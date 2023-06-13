import React from 'react';

const User = React.lazy(() => import('@/features/user'));

interface AuthorizedRoutesConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  title: string;
}

const authorizedRoutesConfig: AuthorizedRoutesConfig[] = [
  {
    path: '/system/user',
    element: User,
    title: 'Đăng ký',
  },
];

export default authorizedRoutesConfig;
