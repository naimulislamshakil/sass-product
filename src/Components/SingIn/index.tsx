import { Eye, EyeOff } from 'lucide-react';
import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin';
import { AppDispatch, RootState, useAppDispatch } from '../../Redux/store';
import { useSelector } from 'react-redux';
import { fetchLogin } from '../../Redux/Slices/loginSlice';
import { successToast } from '../../lib/toastify';

const Singin = () => {
	const [hidden, isHidden] = useState(true);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch: AppDispatch = useAppDispatch();
	const { data, loading, error } = useSelector(
		(state: RootState) => state.login
	);

	// console.log({ data, loading, error });

	const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const user = { email, password };

		dispatch(fetchLogin(user));
	};

	if (data?.success === true) {
		successToast(data.message);
		navigate('/dashboard');
	}
	return (
		<div className="h-screen w-full bg-slate-100 flex justify-center items-center">
			<div className="bg-white shadow-xl shadow-slate-300 rounded-xl p-5 lg:w-[50%] md:w-full flex flex-col justify-center items-center py-10">
				<h1 className="flex z-40 font-bold text-2xl uppercase">Login</h1>

				<form
					onSubmit={onSubmitLogin}
					className="flex flex-col justify-center items-center w-full"
				>
					<div className="mt-6 lg:w-[60%] md:w-full">
						<input
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="webminds@gmail.com"
							className="w-[100%] border outline-none rounded px-3 bg-white h-11 shadow-md"
						/>
					</div>

					<div className="mt-4 lg:w-[60%] md:w-full relatives flex justify-end items-center">
						<input
							type={hidden ? 'password' : 'text'}
							placeholder="***********"
							onChange={(e) => setPassword(e.target.value)}
							className="w-[100%] border outline-none rounded px-3 bg-white h-11 shadow-md pr-3"
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

					<div className="mt-3">
						<span className="font-semibold">
							<Link to="/" className="text-blue-700">
								Forgot Password?
							</Link>
						</span>
					</div>

					<div className="lg:w-[60%] md:w-full">
						<input
							type="submit"
							value="login"
							className="bg-zinc-900 justify-center items-center flex hover:bg-zinc-800 text-white py-2 px-7 mt-5 rounded shadow-lg transition duration-300 w-[100%] uppercase font-semibold tracking-widest"
						/>
					</div>

					<div className="mt-5">
						<span className="font-semibold">
							Don't have an account?{' '}
							<Link to="/singup" className="text-blue-700">
								SingUp
							</Link>
						</span>
					</div>
				</form>

				<div className="line"></div>

				<SocialLogin />
			</div>
		</div>
	);
};

export default Singin;
