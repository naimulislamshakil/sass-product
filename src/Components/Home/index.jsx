import React from 'react';
import Banner from './Banner';
import ValueProposition from '../ValueProposition';
import FeaturedSection from '../FeaturedSection';
import Navbar from '../Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<ValueProposition />
			<FeaturedSection />
		</div>
	);
};

export default Home;
