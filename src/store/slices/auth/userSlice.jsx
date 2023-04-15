import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	name: '',
	email: '',
	roles: '',
	permissions: '',
	token: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (_, action) => action.payload,
		loggedOutUser: () => initialState,
	},
});

export const { setUser, loggedOutUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
