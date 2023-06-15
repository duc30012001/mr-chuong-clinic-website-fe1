import React, { lazy } from 'react';

const SignIn = lazy(() => import('@/features/auth/signIn'));

interface AuthRouteConfig {
  path: string;
  element: React.ReactElement;
  title: string;
}

const authRoutesConfig: AuthRouteConfig[] = [
  {
    path: 'sign-in',
    element: <SignIn />,
    title: 'Đăng ký',
  },
];

export default authRoutesConfig;
