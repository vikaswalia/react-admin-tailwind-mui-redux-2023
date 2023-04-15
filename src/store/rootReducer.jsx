import { combineReducers } from 'redux';
import userReducer from '@/store/slices/auth/userSlice';
import themeConfigReducer from '@/store/slices/theme/themeConfigSlice';

const rootReducer = {
	user: userReducer,
	themeConfig: themeConfigReducer,
};

export default rootReducer;
