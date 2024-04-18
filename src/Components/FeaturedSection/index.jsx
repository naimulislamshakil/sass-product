import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
	return (
		<div className="mx-auto mt-32 mb-32 sm:mt-56 max-w-5xl">
			<div className="md-12 px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
						Start chatting in minutes
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Chatting to your PDF files has never been easire than with Quill
					</p>
				</div>
			</div>

			{/* Steps */}

			<ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
				<li className="md:flex-1">
					<div className="flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
						<span className="text-sm font-medium text-blue-600">Step 1</span>
						<span className="text-xl font-semibold">
							Sign up for an account
						</span>
						<span className="mt-2 text-zinc-700">
							Either starting out with a free plan or choose our{' '}
							<Link
								to="/pricing"
								className="text-blue-700 underline underline-offset-2"
							>
								pro plan
							</Link>
							.
						</span>
					</div>
				</li>
				<li className="md:flex-1">
					<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
						<span className="text-sm font-medium text-blue-600">Step 2</span>
						<span className="text-xl font-semibold">Upload your PDF file</span>
						<span className="mt-2 text-zinc-700">
							We&apos;ll process your file and make it ready for you to chat
							with.
						</span>
					</div>
				</li>
				<li className="md:flex-1">
					<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
						<span className="text-sm font-medium text-blue-600">Step 3</span>
						<span className="text-xl font-semibold">
							Start asking questions
						</span>
						<span className="mt-2 text-zinc-700">
							It&apos;s that simple. Try out Quill today - it really takes less
							than a minute.
						</span>
					</div>
				</li>
			</ol>

			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mt-16 flow-root sm:mt-24">
					<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
						<img src="./images/file-upload-preview.jpg" alt="file uplode" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedSection;
