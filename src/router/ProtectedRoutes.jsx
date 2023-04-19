import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser } from '@store/slices/auth/userSlice';

const useAuth = () => {
	const adminUser = useSelector(selectUser);
	const user = { loggedIn: adminUser.token ? true : false };
	return user.loggedIn;
};

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet /> : <Navigate to='/notfound' />;
};

export default ProtectedRoutes;
