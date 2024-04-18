import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Singin from './Components/SingIn';
import Singup from './Components/Singup';
import ComingSoon from './Components/ComingSoon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { errorToast } from './lib/toastify';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.persistent);
	const navigate = useNavigate();

	const token = localStorage.getItem('token');

	// useEffect(() => {
	// 	dispatch(fetchPersistent(token));
	// }, [dispatch, token]);

	// if (error) {
	// 	errorToast('Pleace Login Again!');
	// 	localStorage.removeItem('token');
	// 	navigate('/login');
	// }

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Singin />} />
				<Route path="/singup" element={<Singup />} />
				<Route path="/solution" element={<ComingSoon />} />
				<Route path="/resource" element={<ComingSoon />} />
				<Route path="/developers" element={<ComingSoon />} />
				<Route path="/pricing" element={<ComingSoon />} />
			</Routes>

			<ToastContainer />

			<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
		</div>
	);
}

export default App;
