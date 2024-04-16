import React, { useEffect, useState } from 'react';
import Skeleton from '../Loading';

const Dashboard = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return <div>{loading ? <Skeleton /> : 'Dashboard'}</div>;
};

export default Dashboard;
