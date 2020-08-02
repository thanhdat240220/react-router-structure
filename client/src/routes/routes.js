import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router-dom';
import {
  adminPermission,
  editPermission,
  userPermission
} from '../config';

import {
  PrivateLayout,
  PublicLayout,
} from '../layouts'

const Home = React.lazy(() => import('../components/Home'));
const LoginView = React.lazy(() => import('../components/LoginView'));
const RegisterView = React.lazy(() => import('../components/RegisterView'));
const Admin = React.lazy(() => import('../components/Admin'));
const NotFound = React.lazy(() => import('../components/NotFound'));
const ListView = React.lazy(() => import('../components/ListView'));

const routers = [
  // Page routes
  {
    name: '',
    path: '/',
    exact: true,
    crumbTitle: 'Home',
    handler: Home,
    layout: PublicLayout,
  }, {
    name: 'home',
    path: '/home',
    crumbTitle: 'Home',
    handler: Home,
    layout: PublicLayout
  }, {
    name: 'login',
    path: '/login',
    crumbTitle: 'Login',
    handler: LoginView,
    layout: PublicLayout
  },
  {
    name: 'register',
    path: '/register',
    crumbTitle: 'Register',
    handler: RegisterView,
    layout: PublicLayout
  },
  {
    name: 'list',
    path: '/list',
    crumbTitle: 'List',
    privateRoute: true,
    handler: ListView,
    permission: [editPermission, userPermission],
    layout: PrivateLayout
  },
  {
    name: 'admin',
    path: '/admin',
    crumbTitle: 'Admin',
    handler: Admin,
    privateRoute: true,
    permission: [adminPermission],
    layout: PrivateLayout
  },
  {
    name: 'notfound',
    path: '*',
    crumbTitle: 'Not Found',
    handler: NotFound,
    layout: PublicLayout
  }
];

export default routers;