import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterReducedr from './Slices/authSlice';
import loginReducer from './Slices/loginSlice';
export const store = configureStore({
	reducer: {
		singup: RegisterReducedr,
		login: loginReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
