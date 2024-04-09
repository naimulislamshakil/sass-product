import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Link } from 'react-router-dom';
import { navbars } from '../../lib/navbar';
import { AlignJustify, ArrowRight, X } from 'lucide-react';

const Navbar = () => {
	const [click, isClick] = useState(false);
	console.log(click);
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blue-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link to="/" className="flex z-40 font-bold text-2xl md:text-base">
						<span>Datamino</span>
					</Link>

					<div
						className={
							click
								? 'lg:static lg:min-h-14 absolute min-h-[40vh] left-0 top-[3.6rem] border-red-400 lg:w-auto w-full flex items-center justify-center px5 bg-white/75 backdrop-blue-lg'
								: 'lg:static lg:min-h-14 absolute min-h-[40vh] left-0 top-[-100vh] border-red-400 lg:w-auto w-full flex items-center justify-center px5 bg-white/75 backdrop-blue-lg'
						}
					>
						<ul className="flex lg:flex-row flex-col items-center gap-[4vw]">
							{navbars.map((item) => (
								<li className="">
									<Link
										className="hover:text-zinc-700 font-semibold"
										to={item?.path}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex justify-center items-center">
						<button
							type="button"
							className="text-zinc-600 bg-transparent hover:bg-zinc-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
						>
							<Link className="font-semibold" to="login">
								Sing In
							</Link>
						</button>
						<button
							type="button"
							className="bg-zinc-900 hover:bg-zinc-800 py-2 md:py-1 px-4 text-white rounded ml-1"
						>
							<Link
								to="/singup"
								className="justify-center items-center flex font-semibold"
							>
								Get Start <ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</button>

						<button
							onClick={() => isClick(!click)}
							type="button"
							className="text-zinc-600 bg-transparent hover:bg-zinc-200  rounded-lg text-sm px-5 py-2.5 ml-1 lg:hidden"
						>
							{click ? <X /> : <AlignJustify />}
						</button>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
