import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchLogin = createAsyncThunk('auth/login', async (data) => {
	axios.defaults.withCredentials = true;
	const response = await axios.post(`${baseUrl}/login`, data);
	return response.data;
});

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		messageClear: (state, _) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLogin.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLogin.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.data = action.payload;
			})
			.addCase(fetchLogin.rejected, (state, action) => {
				state.loading = false;

				if (action.error.message === 'Request failed with status code 409') {
					state.error = 'Access Denied! Invalid Credentials.';
				} else {
					state.error = action.error.message;
				}

				state.data = null;
			});
	},
});

export default loginSlice.reducer;
