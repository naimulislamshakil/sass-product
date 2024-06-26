import React, { useState } from 'react';
import SocialLogin from '../SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { fetchRegister } from '../../Redux/Slices/authSlice';
import { errorToast, successToast } from '../../lib/toastify';
import Skeleton from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';

const Singup = () => {
	const [hidden, isHidden] = useState(true);
	const navigate = useNavigate();
	const [confirmHidden, isConfirmHidden] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.singup);

	const onSubmitSingup = (e) => {
		e.preventDefault();
		if (password === rePassword) {
			const user = { email, password };

			dispatch(fetchRegister(user)).then((result) => {
				if (result.payload) {
					successToast(result?.payload?.message);
					navigate('/login');
				}
				if (error) {
					errorToast(error);
				}
			});
		}
	};

	return (
		<>
			<Navbar />
			<div className="h-screen w-full bg-slate-100 flex justify-center items-center">
				{loading && <Skeleton />}

				<div className="bg-white shadow-xl shadow-slate-300 rounded-xl p-5 lg:w-[50%] md:w-full flex flex-col justify-center items-center py-10">
					<h1 className="flex z-40 font-bold text-2xl uppercase">singup</h1>

					<form
						onSubmit={onSubmitSingup}
						className="flex flex-col justify-center items-center w-full"
					>
						<div className="mt-6 lg:w-[60%] md:w-full">
							<input
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="webminds@gmail.com"
								className="w-[100%] border outline-none rounded px-3 bg-white h-11 shadow-md"
								autoComplete="off"
							/>
						</div>

						<div className="mt-4 lg:w-[60%] md:w-full relatives flex justify-end items-center">
							<input
								type={hidden ? 'password' : 'text'}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Create Password"
								className="w-[100%] border outline-none rounded px-3 bg-white h-11 shadow-md pr-3"
								autoComplete="off"
							/>
							{hidden ? (
								<EyeOff
									className="text-zinc-700 absolutes mr-4"
									onClick={() => isHidden(!hidden)}
								/>
							) : (
								<Eye
									className="text-zinc-700 absolutes mr-4"
									onClick={() => isHidden(!hidden)}
								/>
							)}
						</div>

						<div className="mt-4 lg:w-[60%] md:w-full relatives flex justify-end items-center">
							<input
								type={confirmHidden ? 'password' : 'text'}
								onChange={(e) => setRePassword(e.target.value)}
								placeholder="Confirm Password"
								className="w-[100%] border outline-none rounded px-3 bg-white h-11 shadow-md pr-3"
								autoComplete="off"
							/>
							{confirmHidden ? (
								<EyeOff
									className="text-zinc-700 absolutes mr-4"
									onClick={() => isConfirmHidden(!confirmHidden)}
								/>
							) : (
								<Eye
									className="text-zinc-700 absolutes mr-4"
									onClick={() => isConfirmHidden(!confirmHidden)}
								/>
							)}
						</div>

						<div className="lg:w-[60%] md:w-full">
							<input
								type="submit"
								value="singup"
								className="bg-zinc-900 justify-center items-center flex hover:bg-zinc-800 text-white py-2 px-7 mt-5 rounded shadow-lg transition duration-300 w-[100%] uppercase font-semibold tracking-widest"
							/>
						</div>

						<div className="mt-5">
							<span className="font-semibold">
								Already have an account?{' '}
								<Link to="/login" className="text-blue-700">
									LogIn
								</Link>
							</span>
						</div>
					</form>

					<div className="line"></div>

					<SocialLogin />
				</div>
			</div>
		</>
	);
};

export default Singup;
