import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Singin from './Components/SingIn';
import Singup from './Components/Singup';
import ComingSoon from './Components/ComingSoon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
