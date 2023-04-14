import React, { useState } from 'react';
import AuthUserNavbar from '../components/core/navbars/AuthUserNavbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosHeaders } from '../helpers/axiosHeaders';
import { Outlet } from 'react-router-dom';

const AuthUserLayout = () => {
	const [name, setName] = useState('');
	const data = { name };
	const handleChange = async () => {
		const headers = axiosHeaders();
		// console.log('Headers from AuthUserLayout change name: ', headers);
		// console.log('change name clicked');
		const res = await axios
			.post(
				'/api/admin/update-profile',
				// baseURL: process.env.REACT_APP_API_URL,
				data,
				headers
			)
			.then((res) => {
				// console.log('Response from AuthUserNavbar logout: ', res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<AuthUserNavbar />
			<div>
				<h1 className='bg-slate-200 p-5'>Auth User Layout</h1>
				<div className='bg-slate-300 p-5 h-[100vh]'>
					<input
						type='text'
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
					/>
					<br />
					<button
						className='bg-red-800 text-white p-2 mt-1'
						onClick={handleChange}
					>
						Change Name
					</button>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AuthUserLayout;
