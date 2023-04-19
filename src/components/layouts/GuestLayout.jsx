import React from 'react';
import GuestNavbar from '@components/navbars/GuestNavbar';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
	return (
		<>
			<GuestNavbar />
			<div>
				<h1 className='bg-slate-200 p-5'>Guest Layout</h1>
				<div className='bg-slate-300 p-5'>
					<Outlet />
				</div>
			</div>
		</>
	);
};
export default GuestLayout;
