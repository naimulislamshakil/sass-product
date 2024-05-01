import React from 'react';
import FilterPatients from './FilterPatients';

const AllPatients = () => {
	return (
		<div className="px-2 mt-14">
			<div class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow  w-[100%]">
				<FilterPatients />
			</div>
		</div>
	);
};

export default AllPatients;
