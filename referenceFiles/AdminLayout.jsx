import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useState, useEffect, useRef, useContext } from 'react';
import Footer from '../components/dashboard/Footer';
import Sidebar from '../components/dashboard/Sidebar';
import Toolbar from '../components/dashboard/Toolbar';

import { AbilityBuilder, Ability } from '@casl/ability';
import { AbilityContext } from '../services/Can';
import Circle from '../components/loader/Circle';
import { useRouter } from 'next/router';
import ReactLoader from '@/Components/loader/ReactLoader';
import createSettingStore from '@/Store/settingStore';

function updateAbility(ability, permissions) {
	const { can, rules } = new AbilityBuilder(Ability);

	if (permissions) {
		permissions.forEach((permission) => {
			can(permission);
		});
	}

	ability.update(rules);
}

const AdminLayout = ({ children, pageTitle }) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(false);
	const toggleRef = useRef(null);
	const sidebarRef = useRef(null);
	const ability = useContext(AbilityContext);
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState('');
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
		? process.env.NEXT_PUBLIC_BACKEND_URL
		: 'https://eurobizlink.restaurantsupremo.com';

	const token = Cookies.get('token');

	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	const favIcon = createSettingStore((state) => state.favIcon);
	const siteData = createSettingStore((state) => state.items);

	useEffect(() => {
		async function fetchUser() {
			const res = await axios
				.get('/api/admin/user')
				.then((res) => {
					const permissions = res.data.data.permissions;
					const user = res.data.data.user;
					Cookies.set('name', user.name);
					setName(user.name);
					updateAbility(ability, permissions);
					setLoading(false);
				})
				.catch((err) => {
					if (err.response.data.success == false) {
						Cookies.remove('token');
						Cookies.remove('name');
						router.push('/login');
					}
				});
		}
		fetchUser();
		const handleClick = (event) => {
			const insideToggle = toggleRef.current?.contains(event.target);
			const insideMenu = sidebarRef.current?.contains(event.target);

			if (!(insideToggle || insideMenu)) {
				setCollapsed(false);
			}
		};

		const mediaQuery = window.matchMedia('(max-width: 639px)');

		if (mediaQuery.matches) {
			window.addEventListener('click', handleClick);
		}

		return () => window.removeEventListener('click', handleClick);
	}, [ability, router]);

	// if (!collapsed) return null;

	// console.log('favIcon',favIcon);

	return (
		<>
			<Head>
				{pageTitle ? (
					<title>{pageTitle + '-' + siteData?.site_name}</title>
				) : (
					<title>{siteData ? siteData?.site_name : ''}</title>
				)}

				{favIcon && (
					<link
						rel='icon'
						type='image/x-icon'
						href={favIcon}
					/>
				)}
			</Head>

			{loading ? (
				<div className='flex h-screen'>
					<div className='m-auto'>
						<ReactLoader
							height={120}
							width={120}
						/>
					</div>
				</div>
			) : (
				<div className='flex'>
					<Sidebar
						collapsed={collapsed}
						sidebarRef={sidebarRef}
					/>

					<div className='w-full overflow-auto'>
						<Toolbar
							toggleCollapsed={toggleCollapsed}
							ref={toggleRef}
						/>
						<main className='w-full sm:w-auto py-6 px-6 sm:px-12'>
							<h1 className='text-xl font-bold pb-4 dark:text-white'>
								Welcome {name}
							</h1>
							{children}
						</main>
						<Footer />
					</div>
				</div>
			)}
		</>
	);
};

// export default WithAuth(AdminLayout)
export default AdminLayout;
