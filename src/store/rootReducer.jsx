import { combineReducers } from 'redux';
import userReducer from '@store/slices/auth/userSlice';
import themeConfigReducer from '@store/slices/theme/themeConfigSlice';

const rootReducer = combineReducers({
	user: userReducer,
	themeConfig: themeConfigReducer,
});

export const persistReducersList = ['user', 'themeConfig'];
export default rootReducer;
