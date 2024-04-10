import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Singin from './Components/SingIn';
import Singup from './Components/Singup';
import ComingSoon from './Components/ComingSoon';
// import { cn } from './lib/util';

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
		</div>
	);
}

export default App;
