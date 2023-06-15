import React, { lazy } from 'react';

const Home = lazy(() => import('@/features/home'));

interface AuthRouteConfig {
  path: string;
  element: React.ReactElement;
  title: string;
}

const authRoutesConfig: AuthRouteConfig[] = [
  {
    path: '',
    element: <Home />,
    title: 'Trang chủ',
  },
];

export default authRoutesConfig;
