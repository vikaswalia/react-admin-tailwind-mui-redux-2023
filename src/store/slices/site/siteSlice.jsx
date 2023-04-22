import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	routes: '',
};

const siteSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setSite: (_, action) => action.payload,
	},
});

export const { setSite } = siteSlice.actions;
export const selectRoutes = (state) => state.site.routes;
export const selectSite = (state) => state.site;
export default siteSlice.reducer;
