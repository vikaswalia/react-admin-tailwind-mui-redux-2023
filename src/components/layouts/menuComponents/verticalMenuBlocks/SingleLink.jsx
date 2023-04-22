import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SingleLink = ({ routt }) => {
	return (
		<>
			<NavLink to={routt.path}>{routt.menu_title}</NavLink>
			<br />
		</>
	);
};

export default SingleLink;
