import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
// import { cn } from './lib/util';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
