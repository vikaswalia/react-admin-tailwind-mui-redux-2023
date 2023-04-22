import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimateHeight from 'react-animate-height';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '@store/slices/theme/themeConfigSlice';
import { useSelector, useDispatch } from 'react-redux';

const GroupBlock = ({
	id,
	name,
	t,
	toggleMenu,
	currentMenu,
	setCurrentMenu,
}) => {
	// const [currentMenu, setCurrentMenu] = useState('');
	// const { t } = useTranslation();
	const location = useLocation();
	const dispatch = useDispatch();
	// const toggleMenu = (value) => {
	// 	setCurrentMenu((oldValue) => {
	// 		return oldValue === value ? '' : value;
	// 	});
	// };
	return (
		<>
			<li className='menu nav-item'>
				<button
					type='button'
					className={`${
						currentMenu === id ? 'active' : ''
					} nav-link group w-full`}
					onClick={() => toggleMenu(id)}
				>
					<div className='flex items-center'>
						{/* <svg
											className='group-hover:!text-primary'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												opacity='0.5'
												d='M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z'
												fill='currentColor'
											/>
											<path
												d='M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z'
												fill='currentColor'
											/>
										</svg> */}
						<span className='ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark'>
							{/* {t('dashboard')} */}
							{name}
						</span>
					</div>

					<div className={currentMenu === id ? 'rotate-90' : 'rtl:rotate-180'}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 5L15 12L9 19'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</button>

				<AnimateHeight
					duration={300}
					height={currentMenu === id ? 'auto' : 0}
				>
					<ul className='sub-menu text-gray-500'>
						<li>
							<NavLink to='/'>{t('sales')}</NavLink>
						</li>
						<li>
							<NavLink to='/analytics'>{t('analytics')}</NavLink>
						</li>
						<li>
							<NavLink to='/finance'>{t('finance')}</NavLink>
						</li>
						<li>
							<NavLink to='/crypto'>{t('crypto')}</NavLink>
						</li>
					</ul>
				</AnimateHeight>
			</li>
		</>
	);
};

export default GroupBlock;
