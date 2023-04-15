import DefaultLayout from '@/layouts/DefaultLayout';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const AuthUserLayout = lazy(() => import('@/layouts/AuthUserLayout'));
const GuestLayout = lazy(() => import('@/layouts/GuestLayout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Index = lazy(() => import('@/pages/Index'));

// const DateRangePicker = lazy(() => import('../pages/Forms/DateRangePicker'));
// const Clipboard = lazy(() => import('../pages/Forms/Clipboard'));

export default function AllRoutes() {
	let elements = useRoutes([
		{
			path: '/',
			element: <GuestLayout />,
			children: [
				{
					path: '',
					element: <Index />,
				},
			],
		},
		{
			path: '/',
			element: <DefaultLayout />,
			// element: <AuthUserLayout />,
			children: [
				{
					path: 'dashboard',
					element: <Dashboard />,
				},
			],
		},
	]);
	return elements;
}
