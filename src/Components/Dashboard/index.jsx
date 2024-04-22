import React, { useEffect, useState } from 'react';
import Skeleton from '../Loading';
import Navbar from '../Navbar';
import { useDispatch } from 'react-redux';
import { fetchPersistent } from '../../Redux/Slices/persistentSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import { errorToast } from '../../lib/toastify';
import { Button, Layout, theme } from 'antd';
import User from './User';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [darkTheme, setDarkTheme] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		dispatch(fetchPersistent()).then((result) => {
			if (result?.error?.message === 'Request failed with status code 409') {
				errorToast('Please Login Again!');
				navigate('/login');
			}
		});
	}, [dispatch, navigate]);

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
							<Header style={{ padding: 0, background: colorBgContainer }}>
								<Button
									type="text"
									className="ml-[15px]"
									onClick={(e) => setCollapsed(!collapsed)}
									icon={
										collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
									}
								/>
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
