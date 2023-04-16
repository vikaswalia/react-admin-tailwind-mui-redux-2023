import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { createElement } from 'react';

const AuthUserLayout = lazy(() =>
	import('@/components/layouts/AuthUserLayout')
);
const GuestLayout = lazy(() => import('@/components/layouts/GuestLayout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Index = lazy(() => import('@/pages/Index'));

// const DateRangePicker = lazy(() => import('../pages/Forms/DateRangePicker'));
// const Clipboard = lazy(() => import('../pages/Forms/Clipboard'));

import data from './routesData.json';

export default function AllRoutes() {
	console.log('Routes Data: ', data.routesList);

	let newElements = [];
	function compo(comp) {
		var Component = window[comp];
		return <Component />;
	}

	function renderItem(items) {
		// console.log('items: ', items);
		const mappedItems = items.map((item) => {
			return {
				path: item.path,
				element: compo(item.element),
				children: item.children ? renderItem(item.children) : null,
			};
		});
		return mappedItems;
	}

	newElements = renderItem(data.routesList);

	let elemens = [
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
	];
	console.log('newElements: ', newElements);
	console.log('elemens: ', elemens);

	console.log('newElements`type: ', typeof newElements);
	console.log('elemens type: ', typeof elemens);
	let elements = useRoutes(elemens);
	console.log('elemens: ', elemens);
	//
	return elements;
}
