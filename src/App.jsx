import { useDispatch, useSelector } from 'react-redux';
import AllRoutes from './router/allRoutes';
import { useEffect, PropsWithChildren } from 'react';
import {
	toggleRTL,
	toggleTheme,
	toggleLocale,
	toggleMenu,
	toggleLayout,
	toggleAnimation,
	toggleNavbar,
	toggleSemidark,
} from '@/store/slices/theme/themeConfigSlice';
import { store } from '@/store/store';
import { dynamicRoutes } from '@/router/dynamicRoutes';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
	const dispatch = useDispatch();
	const themeConfig = useSelector((state) => state.themeConfig);
	const rts = dynamicRoutes();
	// console.log('dynamicRoutes from app.jsx: ', rts);
	useEffect(() => {
		dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
		dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
		dispatch(
			toggleLayout(localStorage.getItem('layout') || themeConfig.layout)
		);
		dispatch(
			toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass)
		);
		dispatch(
			toggleAnimation(
				localStorage.getItem('animation') || themeConfig.animation
			)
		);
		dispatch(
			toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar)
		);
		dispatch(
			toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale)
		);
		dispatch(
			toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark)
		);
	}, [
		dispatch,
		themeConfig.theme,
		themeConfig.menu,
		themeConfig.layout,
		themeConfig.rtlClass,
		themeConfig.animation,
		themeConfig.navbar,
		themeConfig.locale,
		themeConfig.semidark,
	]);

	return (
		<div
			className={`${
				(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''
			} ${themeConfig.menu} ${themeConfig.layout} ${
				themeConfig.rtlClass
			} main-section antialiased relative font-nunito text-sm font-normal`}
		>
			{/* <AllRoutes /> */}
			{/* <DynamicRoutes /> */}
			<Routes>{rts}</Routes>
		</div>
	);
}

export default App;
