import React from 'react';
import authorizedRoutesConfig from './routes';
const AdminLAyout = React.lazy(() => import('@/layouts/AdminLayout'));

const authorizedStructure = {
  path: '/system',
  children: authorizedRoutesConfig,
  element: <AdminLAyout />,
};

export default authorizedStructure;
