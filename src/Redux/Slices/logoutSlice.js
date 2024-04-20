import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchLogout = createAsyncThunk(
	'auth/logout',
	async () => {
		const responce = await axios.get(`${baseUrl}/logout`);

		return responce.data;
	}
);

export const logoutSlice = createSlice({
	name: 'logout',
	initialState: { data: null },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLogout.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});

export default logoutSlice.reducer;
