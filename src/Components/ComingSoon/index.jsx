import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen px-4">
			<h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
			<p className="text-gray-600 text-lg mb-8">
				We're working hard to bring you an amazing new website. Stay tuned!
			</p>
			<div className="flex space-x-4">
				<Link
					to="/"
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
				>
					Subscribe
				</Link>
				<Link
					to="/"
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300"
				>
					Go to Home Page
				</Link>
			</div>
		</div>
	);
};

export default ComingSoon;
