import React, { useEffect, useState } from 'react';
import Skeleton from '../Loading';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersistent } from '../../Redux/Slices/persistentSlice';
import { useNavigate } from 'react-router-dom';
import { errorToast } from '../../lib/toastify';

const Dashboard = () => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error } = useSelector((state) => state.persistent);

	console.log(error);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		dispatch(fetchPersistent());
	}, [dispatch]);

	if (error === !null) {
		navigate('/login');
		errorToast('Pleace LogIn Again!');
	}
	return (
		<div>
			{loading ? (
				<Skeleton />
			) : (
				<>
					<Navbar />
					'Dashboard'
				</>
			)}
		</div>
	);
};

export default Dashboard;
