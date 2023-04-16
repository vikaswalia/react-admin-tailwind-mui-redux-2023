import AuthUserLayout from '@/components/layouts/AuthUserLayout';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import GuestLayout from '@/components/layouts/GuestLayout';
import Dashboard from '@/pages/Dashboard';
import Index from '@/pages/Index';
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
