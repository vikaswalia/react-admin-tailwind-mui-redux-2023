import React, { useState } from 'react';
import AuthUserNavbar from '@components/navbars/AuthUserNavbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosHeaders } from '@helpers/axiosHeaders';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '@store/slices/auth/userSlice';
import Sidebar from './SideBar';

const AuthUserLayout = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => selectUser);
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
				// console.log(
				// 	'Response from AuthUserNavbar update profile: ',
				// 	res.data.data.user
				// );
				const { email, name, id } = res.data.data.user;
				dispatch(setUser({ ...user, email, name, id }));
				// console.log('Response from AuthUserNavbar logout: ', res);
			})
			.catch((err) => {
				console.log('err from AuthUserLayout', err);
			});
	};
	return (
		<>
			<AuthUserNavbar />
			{/* <Sidebar /> */}
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
