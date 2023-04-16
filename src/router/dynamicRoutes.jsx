import React from 'react';
import routesData from './routesData.json';
import { ComponentRegister } from '@/router/ComponentRegister';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export function dynamicRoutes() {
	const rts = routesData.routesList;
	// console.log('Routes Data from dynamiRoutes: ', rts);
	// console.log('ComponentRegister from dynamic routes	: ', ComponentRegister);

	const rout = (items) => {
		const its = items.map((item, index) => {
			// console.log(item.component);
			return (
				<Route
					key={index}
					path={item.path}
					exact={item.exact}
					element={ComponentRegister[item.component]}
				>
					if({item.child_routes} && {item.children !== []}){rout(item.children)}
				</Route>
			);
		});
		return its;
	};
	const fullRoutes = rout(rts);
	// const fullRoutes = <Routes>{fRoutes}</Routes>;
	// console.log('fullRoutes', fullRoutes);
	// return fullRoutes;
	return fullRoutes;
}
