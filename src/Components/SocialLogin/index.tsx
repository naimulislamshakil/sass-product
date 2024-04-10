import { Facebook } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SocialLogin = () => {
	return (
		<div className="mt-10 w-[60%]">
			{/* for facebook */}
			<div className="flex justify-center items-center text-white bg-blue-800 rounded shadow-lg transition duration-300 w-[100%] py-2 px-7 hover:bg-blue-700">
				<svg
					className="w-[14px]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
				>
					<path
						fill="#f7f7f7"
						d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
					/>
				</svg>
				<span className="ml-5 uppercase font-semibold tracking-widest">
					Login with facebook
				</span>
			</div>

			{/* for google */}
			<div className="flex justify-center items-center text-zinc-800 bg-zinc-200 rounded shadow-lg transition duration-300 w-[100%] mt-4 py-2 px-7 hover:bg-zinc-300">
				<svg
					className="w-[16px]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 488 512"
				>
					<path
						fill="#000000"
						d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
					/>
				</svg>
				<span className="ml-5 uppercase font-semibold tracking-widest">
					Login with facebook
				</span>
			</div>
		</div>
	);
};

export default SocialLogin;
