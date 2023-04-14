import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { axiosHeaders } from '../../../helpers/axiosHeaders';

const GuestNavbar = () => {
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);
	// const [error, setError] = useState('');

	const email = 'admin@domain.com';
	const password = 'password';
	const data = { email, password };

	const handleLogin = async () => {
		// setSubmitting(true);
		// e.preventDefault();

		const headers = axiosHeaders();
		// console.log('headers from login request', headers);
		const res = await axios
			.post('/api/admin/login', data, headers)
			.then((res) => {
				// console.log('response from login function ', res);
				if (res.data.success) {
					Cookies.set('token', res.data.data.mbtadmintoken);
					// updateAbility(ability, res.data.data.permissions)
					// localStorage.setItem('permissions', JSON.stringify(res.data.data.permissions))
					navigate('/dashboard');
				}
				setSubmitting(false);
			})
			.catch((err) => {
				// setError(err.response.data.message);
				setSubmitting(false);
			});
	};
	return (
		<div className='flex justify-between p-4 bg-slate-800 text-white h-[60px]'>
			<img
				src='/logo192.png'
				className=''
			></img>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default GuestNavbar;
