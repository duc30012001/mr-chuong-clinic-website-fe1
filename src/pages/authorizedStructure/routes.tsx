import React from 'react';

const User = React.lazy(() => import('@/features/user'));

interface AuthorizedRoutesConfig {
  path: string;
  element: React.ReactElement;
  title: string;
}

const authorizedRoutesConfig: AuthorizedRoutesConfig[] = [
  {
    path: 'user',
    element: <User />,
    title: 'Người dùng',
  },
];

export default authorizedRoutesConfig;
