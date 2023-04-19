import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className='mt-2'>
			<h1 className='text-4xl text-red-500'>Dashboard</h1>
			<br />
			<Link to='/dashboard'>Dashboard</Link>
			<br />
			<Link to='/dashboard/users'>Users</Link>
			<br />
			<Link to='/dashboard/users/create'>Create Users</Link>
			<Outlet />
		</div>
	);
};

export default Dashboard;
