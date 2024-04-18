import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchLogin = createAsyncThunk(
	'auth/login',
	async (data, thunkAPI) => {
		try {
			const response = await axios.post(`${baseUrl}/login`, data);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

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
				state.error = action.error.message || 'Pleace Login Again...';
				state.data = null;
			});
	},
});

export default loginSlice.reducer;
