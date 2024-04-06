import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Banner from './Banner';

const Home = () => {
	return (
		<MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center font-sans">
			<Banner />
		</MaxWidthWrapper>
	);
};

export default Home;
