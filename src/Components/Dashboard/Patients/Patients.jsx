import { ClockCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AllPatients from './AllPatients';
import AddPatient from './AddPatient';

const Patients = () => {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = (e) => {
		console.log(e);
		setOpen(false);
	};

	const handleCancel = (e) => {
		console.log(e);
		setOpen(false);
	};
	return (
		<div>
			{/* card */}
			<div className="grid grid-cols-3 gap-3 justify-center items-center px-2 pt-2">
				<div>
					<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
							Today Patients{' '}
						</h5>

						<div className=" flex justify-between items-center">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								10
							</h5>

							<ClockCircleOutlined className="text-2xl text-white bg-teal-600 p-2 rounded-lg" />
						</div>

						<p class="font-normal text-gray-700 dark:text-gray-400">
							Total Patients 10 Today.
						</p>
					</div>
				</div>
				<div>
					<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Monthly Patients{' '}
						</h5>

						<div className=" flex justify-between items-center">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								230
							</h5>

							<ClockCircleOutlined className="text-2xl text-white bg-teal-600 p-2 rounded-lg" />
						</div>

						<p class="font-normal text-gray-700 dark:text-gray-400">
							Total Patients 230 this month.
						</p>
					</div>
				</div>
				<div>
					<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Yearly Patients{' '}
						</h5>
						<div className=" flex justify-between items-center">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								1500{' '}
							</h5>

							<ClockCircleOutlined className="text-2xl text-white bg-teal-600 p-2 rounded-lg" />
						</div>
						<p class="font-normal text-gray-700">
							Total Patients 1500 this month.
						</p>
					</div>
				</div>
			</div>

			{/* show all patients */}
			<AllPatients />

			<div>
				<button
					onClick={showModal}
					className="button-floting bg-teal-600 hover:bg-teal-500 text-white"
				>
					<AddOutlinedIcon />
				</button>

				<AddPatient
					handleCancel={handleCancel}
					handleOk={handleOk}
					open={open}
				/>
			</div>
		</div>
	);
};

export default Patients;
