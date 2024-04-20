import { configureStore } from '@reduxjs/toolkit';
// import RegisterReducedr from './Slices/authSlice';
import loginReducer from './Slices/loginSlice';
import registerReducer from './Slices/authSlice';
import persistentReducer from './Slices/persistentSlice';
import logoutReducer from './Slices/logoutSlice';
export const store = configureStore({
	reducer: {
		singup: registerReducer,
		login: loginReducer,
		persistent: persistentReducer,
		logout: logoutReducer,
	},
});
