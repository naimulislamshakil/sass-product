import React, { useEffect, useState } from 'react';
import Skeleton from '../Loading';
import Navbar from '../Navbar';
import { useDispatch } from 'react-redux';
import { fetchPersistent } from '../../Redux/Slices/persistentSlice';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { errorToast } from '../../lib/toastify';
import { Button, Layout, theme } from 'antd';
import User from './User';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { fetchLogout } from '../../Redux/Slices/logoutSlice';

const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [darkTheme, setDarkTheme] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const [data, setData] = useState();
	const [isOpen, setOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		dispatch(fetchPersistent()).then((result) => {
			console.log({ result });
			if (result.payload) {
				setData(result.payload);
			}
			if (result?.error?.message === 'Request failed with status code 409') {
				errorToast('Please Login Again!');
				navigate('/login');
			}
		});
	}, [dispatch, navigate]);

	const LogOut = () => {
		dispatch(fetchLogout()).then((result) => {
			if (result.payload) {
				navigate('/login');
			}
		});
	};

	const toggleTheme = () => {
		setDarkTheme(!darkTheme);
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div>
			{loading ? (
				<Skeleton />
			) : (
				<>
					<Navbar />
					<Layout>
						<Sider
							collapsible
							collapsed={collapsed}
							trigger={null}
							theme={darkTheme ? 'dark' : 'light'}
						>
							<User darkTheme={darkTheme} />
							<MenuList darkTheme={darkTheme} />
							<ToggleThemeButton
								darkTheme={darkTheme}
								toggleTheme={toggleTheme}
							/>
						</Sider>

						<Layout>
							<Header
								style={{
									padding: 0,
									background: colorBgContainer,
								}}
							>
								<div className="grid grid-cols-3 gap-4 justify-center items-center">
									<div>
										<Button
											type="text"
											className="ml-[15px]"
											onClick={(e) => setCollapsed(!collapsed)}
											icon={
												collapsed ? (
													<MenuUnfoldOutlined />
												) : (
													<MenuFoldOutlined />
												)
											}
										/>
									</div>
									<div>
										<div className="w-[100%]">
											<form class="max-w-md mx-auto">
												<label
													for="default-search"
													class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
												>
													Search
												</label>
												<div class="relative">
													<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
														<svg
															class="w-4 h-4 text-gray-500 dark:text-gray-400"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 20 20"
														>
															<path
																stroke="currentColor"
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
															/>
														</svg>
													</div>
													<input
														type="search"
														id="default-search"
														class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
														placeholder="Search Mockups, Logos..."
														required
													/>
													<button
														type="submit"
														class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
													>
														Search
													</button>
												</div>
											</form>
										</div>
									</div>
									<div className="flex justify-center items-center gap-4">
										{/* avater */}
										<div>
											<button
												type="button"
												class="relative inline-flex items-center p-3 text-sm font-medium text-center"
											>
												<NotificationsOutlinedIcon />
												<span class="sr-only">Notifications</span>
												<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-teal-600 border-2 border-white rounded-full top-1 -end-1">
													20
												</div>
											</button>
										</div>

										<div>
											<div className="" onClick={(e) => setOpen(!isOpen)}>
												<img
													class="w-10 h-10 rounded-full"
													src="./images/user.png"
													alt="Rounded avatar"
												/>
											</div>

											{isOpen === true && (
												<div className="bg-white/75 absolute top-28 flex flex-col items-center justify-center rounded-lg">
													<ul
														class="py-2 text-sm text-gray-700 dark:text-gray-200"
														aria-labelledby="dropdownDefaultButton"
													>
														<li>
															<Link
																to="/dashboard"
																class="block px-4 py-2 hover:bg-gray-100 font-semibold"
															>
																Dashboard
															</Link>
														</li>
														<li>
															<Link
																to="#"
																class="block px-4 py-2 hover:bg-gray-100 font-semibold"
															>
																Settings
															</Link>
														</li>

														<li>
															<button
																onClick={() => LogOut()}
																class="block px-4 py-2 hover:bg-gray-100 font-semibold"
															>
																Sign out
															</button>
														</li>
													</ul>
												</div>
											)}
										</div>
									</div>
								</div>
							</Header>
							<Content>
								<Outlet />
							</Content>
						</Layout>
					</Layout>
				</>
			)}
		</div>
	);
};

export default Dashboard;
