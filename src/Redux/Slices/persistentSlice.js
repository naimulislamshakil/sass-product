import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchPersistent = createAsyncThunk('auth/persistent', async () => {
	axios.defaults.withCredentials = true;

	const response = await axios.get(`${baseUrl}/persistent`);
	return response.data;
});

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const persistentSlice = createSlice({
	name: 'persistent',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPersistent.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPersistent.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchPersistent.rejected, (state, action) => {
				state.loading = false;
				if (action.error.message === 'Request failed with status code 409') {
					state.error = 'Pleace Login Again!';
				} else {
					state.error = action.error.message;
				}
				state.data = null;
			});
	},
});

export default persistentSlice.reducer;
