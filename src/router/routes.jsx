import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GuestLayout from '@/components/layouts/GuestLayout';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import AuthUserLayout from '@/components/layouts/AuthUserLayout';

const routes = [
	// dashboard
	{
		exact: true,
		path: '/',
		element: <GuestLayout />,
		children: {
			exact: false,
			path: '/',
			element: <Index />,
			children: null,
		},
	},
	{
		exact: false,
		path: '/',
		element: <AuthUserLayout />,
		children: {
			exact: false,
			path: 'dashboard',
			element: <Dashboard />,
			children: null,
		},
	},
];

export { routes };
