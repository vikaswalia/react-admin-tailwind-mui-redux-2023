import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { axiosHeaders } from '@helpers/axiosHeaders';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '@store/slices/auth/userSlice';
import useAxiosFunction from '@hooks/useAxiosFunction';
import axiosInst from '@hooks/axiosInst';

const AuthUserNavbar = () => {
	const user = useSelector(selectUser);
	const location = window.location.host;
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);
	const [me, setMe] = useState('');
	const [response, error, loading, axiosFetch] = useAxiosFunction();

	const handleLogoutHook = async () => {
		const headers = axiosHeaders();
		// console.log('headers from handleLoginHook', headers);
		const ftch = await axiosFetch({
			axiosInstance: axiosInst,
			method: 'post',
			url: '/api/admin/logout',
			requestConfig: {},
		});
		if (ftch.data && ftch.data.success) {
			const responseData = ftch.data;
			console.log('res from hook', responseData);
			Cookies.remove('token');
			navigate('/');
			// dispatch(
			// 	setUser({ ...user, email, name, id, roles, permissions, token })
			// );
			// updateAbility(ability, responseData.data.permissions);
			// localStorage.setItem(
			// 	'permissions',
			// 	JSON.stringify(responseData.data.permissions)
			// );
		}
	};

	const handleLogout = () => {
		const headers = axiosHeaders();
		// console.log('Headers from AuthUserNavbar logout: ', headers);
		const res = axios
			.post('/api/admin/logout', headers)
			.then((res) => {
				// console.log('Response from AuthUserNavbar logout: ', res);
				if (res.data.success) {
					Cookies.remove('token');
					navigate('/');

					//   // Cookies.remove('permissions')
					//   // Cookies.remove('user')
				}
			})
			.catch((err) => {
				console.log('erros from AuthUserNavbar', err);
			});
	};

	const handleSubmit = () => {
		// if (Cookies.get('token')) {
		// 	token = Cookies.get('token');
		// 	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		// 	// axios.defaults.withCredentials = true;
		// }
		const headers = axiosHeaders();
		// console.log('Headers from AuthUserNavbar getme: ', headers);
		const res = axios
			.get('/api/admin/me', headers)
			.then((res) => {
				// console.log('Response from AuthUserNavbar getme: ', res);
				if (res.data.success) {
					setSubmitting(false);
					setMe(res.data.data.user);
					// console.log(res.data.data.user);
				}
			})
			.catch((err) => {
				setSubmitting(false);
				console.log('fail', err);
			});
	};

	return (
		<div className='flex justify-between p-4 bg-slate-800 text-white h-[60px]'>
			<img
				src='/logo192.png'
				className=''
			></img>
			<button onClick={handleLogoutHook}>Logout</button>
			{/* <button onClick={handleSubmit}>Get me</button> */}
			{user.name},{user.email}
		</div>
	);
};

export default AuthUserNavbar;
