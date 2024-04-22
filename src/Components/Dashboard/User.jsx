import React from 'react';

const User = ({ darkTheme }) => {
	return (
		<div
			className={
				darkTheme
					? 'flex flex-col justify-center items-center bg-black'
					: 'flex flex-col justify-center items-center bg-white'
			}
		>
			<img src="./images/user.png" alt="User" className="w-[40%] pt-2" />
		</div>
	);
};

export default User;
