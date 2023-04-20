import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '@store/slices/auth/userSlice';
import Cookies from 'js-cookie';

const useAuth = (permission) => {
	const adminUser = useSelector(selectUser);

	let user = false;
	user = { loggedIn: adminUser.token ? true : false };

	return user.loggedIn;
};

const ProtectedRoutes = () => {
	let navRoute = '/notfound';
	if (!Cookies.get('token')) {
		navRoute = '/';
	}
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Navigate to={navRoute} />;
};

export default ProtectedRoutes;
