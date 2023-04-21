import AuthUserLayout from '@layouts/AuthUserLayout';
import AdminLayout from '@layouts/AdminLayout';
import DefaultLayout from '@layouts/DefaultLayout';
import GuestLayout from '@layouts/GuestLayout';
import Dashboard from '@pages/Dashboard';
import Index from '@pages/Index';
import React, { lazy } from 'react';
import Error404 from '@pages/Error404';
import ProtectedRoutes from '@router/ProtectedRoutes';
import Users from '@modules/users/Users';
import CreateUser from '@modules/users/CreateUser';
import Modules from '@modules/Modules';
import Teachers from '@modules/Teachers';
import Admins from '@modules/Admins';
import Permissions from '@modules/Permissions';
import Roles from '@modules/Roles';
import AccessManagement from '@modules/AccessManagement';
import Grades from '@modules/Grades';
import Subjects from '@modules/Subjects';
import Courses from '@modules/Courses';
import UserManagement from '@modules/UserManagement';
import Pages from '@modules/Pages';
// const AuthUserLayout = lazy(() =>
// 	import('@/components/layouts/AuthUserLayout')
// );
// const GuestLayout = lazy(() => import('@/components/layouts/GuestLayout'));
// const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Index = lazy(() => import('@/pages/Index'));
// const DefaultLayout = lazy(() => import('@/components/layouts/DefaultLayout'));

export const ComponentRegister = {
	"GuestLayout": <GuestLayout/>,
	"DefaultLayout": <DefaultLayout/>,
	"AuthUserLayout": <AuthUserLayout/>,
	"Dashboard": <Dashboard/>,
	"Users": <Users/>,
	"CreateUser":<CreateUser/>,
	"Index": <Index/>,
	"Error404": <Error404/>,
	"ProtectedRoute": <ProtectedRoutes/>,
	"AdminLayout":<AdminLayout/>,
	"Modules":<Modules />,
	"Teachers":<Teachers/>,
	"Admins":<Admins/>,
	"Permissions":<Permissions/>,
	"Roles":<Roles/>,
	"AccessManagement":<AccessManagement/>,
	"UserManagement":<UserManagement/>,
	"Grades":<Grades/>,
	"Subjects":<Subjects/>,
	"Courses":<Courses/>,
	"Pages":<Pages/>
};
