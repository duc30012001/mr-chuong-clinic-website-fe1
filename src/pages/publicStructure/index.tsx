import React from 'react';
import authRoutesConfig from './routes';
const MainLayout = React.lazy(() => import('@/layouts/MainLayout'));

const publicStructure = {
  path: '/',
  children: authRoutesConfig,
  element: <MainLayout />,
};

export default publicStructure;
