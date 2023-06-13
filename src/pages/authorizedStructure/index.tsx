import React from 'react';
import authorizedRoutesConfig from './routes';
const AdminLAyout = React.lazy(() => import('@/layouts/AdminLayout'));

const authorizedStructure = {
  fallbackPath: '/auth/sign-in',
  routes: authorizedRoutesConfig,
  element: AdminLAyout,
};

export default authorizedStructure;
