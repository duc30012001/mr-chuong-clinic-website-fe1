import React, { lazy } from 'react';

const SignIn = lazy(() => import('@/features/auth/signIn'));

interface AuthRouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  title: string;
}

const authRoutesConfig: AuthRouteConfig[] = [
  {
    path: '/auth/sign-in',
    element: SignIn,
    title: 'Đăng ký',
  },
];

export default authRoutesConfig;
