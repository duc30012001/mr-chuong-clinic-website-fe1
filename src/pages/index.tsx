import AppLoader from '@/components/AppLoader';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import authorizedStructure from './authorizedStructure';
import authorizingStructure from './authorizingStructure';
import publicStructure from './publicStructure';

export default function Pages() {
  const routesConfig = [
    authorizedStructure,
    authorizingStructure,
    publicStructure,
  ];
  const router = createBrowserRouter(routesConfig);
  console.log('env', import.meta.env.VITE_END_POINT);
  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}
