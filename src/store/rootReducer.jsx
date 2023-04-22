import { combineReducers } from 'redux';
import userReducer from '@store/slices/auth/userSlice';
import themeConfigReducer from '@store/slices/theme/themeConfigSlice';
import siteReducer from '@store/slices/site/siteSlice';

const rootReducer = combineReducers({
	user: userReducer,
	themeConfig: themeConfigReducer,
	site: siteReducer,
});

export const persistReducersList = ['user', 'themeConfig'];
export default rootReducer;
