import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Banner = () => {
	return (
		<MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center font-sans">
			<div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
				<p className="text-sm font-semibold text-gray-700">
					Quill is now public!
				</p>
			</div>

			<h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
				Chat with your <span className="text-blue-600">documents</span> in
				seconds.
			</h1>
			<p className="sm:text-lg text-zinc-700 max-w-prose mt-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
				asperiores est! Sapiente amet nobis fuga quia earum delectus neque sed?
				Quibusdam dolores facilis nesciunt nobis quo. Consequatur sint quidem
				laudantium?
			</p>

			<Link
				className="bg-zinc-900 justify-center items-center flex hover:bg-zinc-800 text-white py-2 px-7 mt-5 rounded shadow-lg transition duration-300"
				to="/dashboard"
				target="_blank"
			>
				Get Started <ArrowRight className="ml-2 h-5 w-5" />
			</Link>
		</MaxWidthWrapper>
	);
};

export default Banner;
