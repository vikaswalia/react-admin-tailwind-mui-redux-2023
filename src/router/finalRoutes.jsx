import { createBrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '@/router/routes';

const finalRoutes = routes.map((route) => {
	return (
		<Route
			path={route.path}
			element={route.element}
		></Route>
	);
});

const router = createBrowserRouter(finalRoutes);
// console.log('router ', router);

export default router;
