import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '@store/slices/theme/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { useState, useEffect } from 'react';
import GroupBlock from './menuComponents/verticalMenuBlocks/GroupBlock';
import { selectRoutes } from '@store/slices/site/siteSlice';
import SingleLink from './menuComponents/verticalMenuBlocks/SingleLink';

const SideBarNew = () => {
	const [currentMenu, setCurrentMenu] = useState('');
	const [errorSubMenu, setErrorSubMenu] = useState(false);
	const themeConfig = useSelector((state) => state.themeConfig);
	const semidark = useSelector((state) => state.themeConfig.semidark);
	const location = useLocation();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const routesList = useSelector(selectRoutes);
	console.log('routes from SideBarNew ', routesList);
	const toggleMenu = (value) => {
		setCurrentMenu((oldValue) => {
			return oldValue === value ? '' : value;
		});
	};

	useEffect(() => {
		const selector = document.querySelector(
			'.sidebar ul a[href="' + window.location.pathname + '"]'
		);
		if (selector) {
			selector.classList.add('active');
			const ul = selector.closest('ul.sub-menu');
			if (ul) {
				let ele = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
				if (ele.length) {
					ele = ele[0];
					setTimeout(() => {
						ele.click();
					});
				}
			}
		}
	}, []);

	useEffect(() => {
		if (window.innerWidth < 1024 && themeConfig.sidebar) {
			dispatch(toggleSidebar());
		}
	}, [location]);

	const TestRender = () => {
		return <p>Test Render from function</p>;
	};
	let routes = '';

	const mappedRoutesFunction = (routes) => {
		const mpRoutes = routes.map((route) => {
			console.log('renderMenu MAP ACCESSES AND HAS ROUTES');
			if (
				route.visible_in_menu &&
				route.child_routes &&
				route.children.length >= 0
			) {
				return (
					<GroupBlock
						id={route.ref_key}
						name={route.menu_title}
						key={route.ref_key}
						t={t}
						toggleMenu={toggleMenu}
						currentMenu={currentMenu}
						setCurrentMenu={setCurrentMenu}
					/>
				);
			} else if (!route.visible_in_menu && route.child_routes) {
				// const childRoutes = route.children.map((rt) => {
				// 	console.log('renderMenu MAP ACCESSES AND HAS ROUTES');
				// 	if (rt.visible_in_menu) {
				// 		return (
				// 			<GroupBlock
				// 				id={rt.ref_key}
				// 				name={rt.menu_title}
				// 				key={rt.ref_key}
				// 				t={t}
				// 				toggleMenu={toggleMenu}
				// 				currentMenu={currentMenu}
				// 				setCurrentMenu={setCurrentMenu}
				// 			/>
				// 		);
				// 	}
				// });
				const childRoutes = mappedRoutesFunction(route.children);
				return childRoutes;
			} else if (
				route.visible_in_menu &&
				!route.child_routes &&
				route.children.length <= 0
			) {
				return <SingleLink routt={route} />;
			}
		});
		return mpRoutes;
	};

	const RenderMenu = () => {
		let mappedRoutes = '';
		console.log('renderMenu ACCESSED', routesList);
		if (routesList != '') {
			mappedRoutes = mappedRoutesFunction(routesList);
			console.log('renderMenu accessed and has routes ', routesList);
		}
		return mappedRoutes;
	};

	return (
		<div className={semidark ? 'dark' : ''}>
			<nav
				className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
					semidark ? 'text-white-dark' : ''
				}`}
			>
				<div className='bg-white dark:bg-black h-full'>
					<div className='flex justify-between items-center px-4 py-3'>
						<NavLink
							to='/'
							className='main-logo flex items-center shrink-0'
						>
							<img
								className='w-8 ml-[5px] flex-none'
								src='/assets/images/logo.svg'
								alt='logo'
							/>
							<span className='text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light'>
								{t('VRISTO')}
							</span>
						</NavLink>

						<button
							type='button'
							className='collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180'
							onClick={() => dispatch(toggleSidebar())}
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5 m-auto'
							>
								<path
									d='M13 19L7 12L13 5'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									opacity='0.5'
									d='M16.9998 19L10.9998 12L16.9998 5'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<PerfectScrollbar className='h-[calc(100vh-80px)] relative'>
						<ul className='relative font-semibold space-y-0.5 p-4 py-0'>
							<GroupBlock
								id='aaaaaaaa'
								name='dashboard-1'
								key={1}
								t={t}
								toggleMenu={toggleMenu}
								currentMenu={currentMenu}
								setCurrentMenu={setCurrentMenu}
							/>
							{/* {routes != ''
								? routes.map((route) => {
										console.log('renderMenu map routes accessed');
										if (!route.visible_in_menu) {
											return (
												<GroupBlock
													id={route.ref_key}
													name={route.menu_title}
													key={1}
													t={t}
													toggleMenu={toggleMenu}
													currentMenu={currentMenu}
													setCurrentMenu={setCurrentMenu}
												/>
											);
										}
								  })
								: ''} */}
							<RenderMenu />
							<TestRender />
						</ul>
					</PerfectScrollbar>
				</div>
			</nav>
		</div>
	);
};

export default SideBarNew;
