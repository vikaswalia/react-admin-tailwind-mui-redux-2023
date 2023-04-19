import AuthUserLayout from '@layouts/AuthUserLayout';
import DefaultLayout from '@layouts/DefaultLayout';
import GuestLayout from '@layouts/GuestLayout';
import Dashboard from '@pages/Dashboard';
import Index from '@pages/Index';
import React, { lazy } from 'react';
// const AuthUserLayout = lazy(() =>
// 	import('@/components/layouts/AuthUserLayout')
// );
// const GuestLayout = lazy(() => import('@/components/layouts/GuestLayout'));
// const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Index = lazy(() => import('@/pages/Index'));
// const DefaultLayout = lazy(() => import('@/components/layouts/DefaultLayout'));

export const ComponentRegister = {
	"GuestLayout": <GuestLayout/>,
	"DefaultLayout": <DefaultLayout/>,
	"AuthUserLayout": <AuthUserLayout/>,
	"Dashboard": <Dashboard/>,
	"Index": <Index/>,
};
