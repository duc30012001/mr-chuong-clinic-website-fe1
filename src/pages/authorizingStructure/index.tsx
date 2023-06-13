import React from 'react';
import authRoutesConfig from './routes';
const AuthLayout = React.lazy(() => import('@/layouts/AuthLayout'));

const authorizingStructure = {
  fallbackPath: '/',
  routes: authRoutesConfig,
  element: AuthLayout,
};

export default authorizingStructure;
