import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../fetchApi';

export const fetchRegister = createAsyncThunk(
	'register/addUser',
	async (data: { email: string; password: string }, thunkAPI) => {
		try {
			const response = await axios.post(`${baseUrl}/singup`, data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to fetch issues.');
		}
	}
);
interface IssuesState {
	data: {
		message: string;
		status: number;
		success: boolean;
	} | null;
	loading: boolean;
	error: string | null;
}
const initialState: IssuesState = {
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
				state.data = action.payload;
			})
			.addCase(fetchRegister.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Something went wrong';
			});
	},
});
export default registerslice.reducer;
