import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { axiosHeaders } from '@helpers/axiosHeaders';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '@store/slices/auth/userSlice';
import useAxiosFunction from '@hooks/useAxiosFunction';
import axiosInst from '@hooks/axiosInst';
import useUpdateAbility from '@hooks/useUpdateAbility';

const GuestNavbar = () => {
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);
	// const [error, setError] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const email = 'admin@domain.com';
	const password = 'password';
	const data = { email, password };
	const [response, error, loading, axiosFetch] = useAxiosFunction();
	const [updateAbility] = useUpdateAbility();

	const handleLoginHook = async () => {
		// setSubmitting(true);
		// e.preventDefault();

		const headers = axiosHeaders();
		// console.log('headers from handleLoginHook', headers);
		const ftch = await axiosFetch({
			axiosInstance: axiosInst,
			method: 'post',
			url: '/api/admin/login',
			data,
			requestConfig: { headers },
		});
		if (ftch.data && ftch.data.success) {
			const responseData = ftch.data;
			console.log('res from hook', responseData);
			const token = responseData.data.mbtadmintoken;
			Cookies.set('token', token);
			const { email, name, id } = responseData.data.admin;
			const roles = responseData.data.roles;
			const permissions = responseData.data.permissions;
			dispatch(
				setUser({ ...user, email, name, id, roles, permissions, token })
			);
			updateAbility(responseData.data.permissions);
			// localStorage.setItem(
			// 	'permissions',
			// 	JSON.stringify(responseData.data.permissions)
			// );
			navigate('/dashboard');
		}
	};

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
					const token = res.data.data.mbtadmintoken;
					Cookies.set('token', token);
					const { email, name, id } = res.data.data.admin;
					const roles = res.data.data.roles;
					const permissions = res.data.data.permissions;
					dispatch(
						setUser({ ...user, email, name, id, roles, permissions, token })
					);
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
			<button onClick={handleLoginHook}>Login with hook</button>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default GuestNavbar;
