import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Singin from './Components/SingIn';
import Singup from './Components/Singup';
import ComingSoon from './Components/ComingSoon';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast } from './lib/toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersistent } from './Redux/Slices/persistentSlice';
import DashboardContent from './Components/Dashboard/DashboardContent';
import Appointments from './Components/Dashboard/Appointments';
import Payments from './Components/Dashboard/Payments';
import Invoices from './Components/Dashboard/Invoices';
import Services from './Components/Dashboard/Services';
import Medicine from './Components/Dashboard/Medicine';
import Campaings from './Components/Dashboard/Campaings';
import Settings from './Components/Dashboard/Settings';
import Patients from './Components/Dashboard/Patients/Patients';
import SinglePatient from './Components/Dashboard/Patients/SinglePatient';

function App() {
	// console.log({ data, loading, error });

	// if (error) {
	// 	errorToast('Pleace Login Again!');
	// 	localStorage.removeItem('token');
	// 	navigate('/login');
	// }

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<DashboardContent />} />
					<Route path="/dashboard/patients" element={<Patients />} />
					<Route
						path="/dashboard/patient/view/:id"
						element={<SinglePatient />}
					/>
					<Route path="/dashboard/appointments" element={<Appointments />} />
					<Route path="/dashboard/payments" element={<Payments />} />
					<Route path="/dashboard/invoices" element={<Invoices />} />
					<Route path="/dashboard/services" element={<Services />} />
					<Route path="/dashboard/medicines" element={<Medicine />} />
					<Route path="/dashboard/campaings" element={<Campaings />} />
					<Route path="/dashboard/settings" element={<Settings />} />
				</Route>
				<Route path="/login" element={<Singin />} />
				<Route path="/singup" element={<Singup />} />
				<Route path="/solution" element={<ComingSoon />} />
				<Route path="/resource" element={<ComingSoon />} />
				<Route path="/developers" element={<ComingSoon />} />
				<Route path="/pricing" element={<ComingSoon />} />
			</Routes>

			<Toaster />

			<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
		</div>
	);
}

export default App;
