import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterReducedr from './Slices/authSlice';
import loginReducer from './Slices/loginSlice';
import persistentReducer from './Slices/persistentSlice';
export const store = configureStore({
	reducer: {
		singup: RegisterReducedr,
		login: loginReducer,
		persistent: persistentReducer,
	},
});
