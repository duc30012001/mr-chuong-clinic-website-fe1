import React from 'react';
import authRoutesConfig from './routes';
const AuthLayout = React.lazy(() => import('@/layouts/AuthLayout'));

const authorizingStructure = {
  path: '/auth',
  children: authRoutesConfig,
  element: <AuthLayout />,
};

export default authorizingStructure;
