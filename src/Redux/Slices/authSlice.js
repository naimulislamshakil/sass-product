import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchRegister = createAsyncThunk(
	'register/addUser',
	async (data) => {
		console.log({ data });
		axios.defaults.withCredentials = true;
		const response = await axios.post(`${baseUrl}/singup`, data);
		return response.data;
	}
);

const initialState = {
	data: null,
	loading: false,
	error: null,
};
export const registerslice = createSlice({
	name: 'github_issues',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRegister.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchRegister.fulfilled, (state, action) => {
				state.loading = false;

				// console.log({ user: action.payload });
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchRegister.rejected, (state, action) => {
				state.loading = false;
				if (action.error.message === 'Request failed with status code 409') {
					state.error = 'User Already Exist.';
				} else {
					state.error = action.error.message;
				}
				state.data = null;
			});
	},
});
export default registerslice.reducer;
