import { Button } from 'antd';
import { Sun, SunMoon } from 'lucide-react';
import React from 'react';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
	return (
		<div>
			<Button
				className="absolute bottom-[10px] left-[20px] flex items-center justify-center text-[1rem]"
				onClick={toggleTheme}
			>
				{darkTheme ? <SunMoon /> : <Sun />}
			</Button>
		</div>
	);
};

export default ToggleThemeButton;
