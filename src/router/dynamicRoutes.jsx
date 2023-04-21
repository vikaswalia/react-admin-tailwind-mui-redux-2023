import React, { useEffect, useState } from 'react';
import routesData from './routesData.json';
import { ComponentRegister } from '@router/ComponentRegister';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import useAxiosFunction from '@hooks/useAxiosFunction';
import axiosInst from '@hooks/axiosInst';
import { axiosHeaders } from '@helpers/axiosHeaders';

export function dynamicRoutes() {
	const [rts, setRts] = useState('');
	// rts = routesData.routesList;
	const [response, error, loading, axiosFetch] = useAxiosFunction();
	const headers = axiosHeaders();
	// console.log('headers from handleLoginHook', headers);
	const getRouteList = async () => {
		const ftch = await axiosFetch({
			axiosInstance: axiosInst,
			method: 'get',
			url: '/api/admin/get-routes',
			requestConfig: {},
		});
		if (ftch.data && ftch.data.success) {
			setRts(ftch.data.data.routesList);
			console.log('rts from dynamicRoutes getRouteList function', rts);
		}
	};
	useEffect(() => {
		getRouteList();
	}, []);

	// console.log('Routes Data from dynamiRoutes: ', rts);
	// console.log('ComponentRegister from dynamic routes	: ', ComponentRegister);

	const rout = (items) => {
		const its = items.map((item, index) => {
			// console.log(item.component);
			if (item.protected) {
				return (
					<Route
						key={index + 'protected'}
						path=''
						element={<ProtectedRoutes permission={item.permission} />}
					>
						<Route
							key={index}
							path={item.path}
							exact={item.exact}
							element={ComponentRegister[item.component]}
						>
							if({item.child_routes} && {item.children !== []})
							{rout(item.children)}
						</Route>
					</Route>
				);
			} else {
				return (
					<Route
						key={index}
						path={item.path}
						exact={item.exact}
						element={ComponentRegister[item.component]}
					>
						if({item.child_routes} && {item.children !== []})
						{rout(item.children)}
					</Route>
				);
			}
		});
		return its;
	};

	// const fullRoutes = <Routes>{fRoutes}</Routes>;
	// console.log('fullRoutes', fullRoutes);
	// return fullRoutes;
	let fullRoutes = '';
	if (rts != '') {
		console.log('rts from synamicRoutes last', rts);
		fullRoutes = rout(rts);
		return fullRoutes;
	} else {
		return '';
	}
}
