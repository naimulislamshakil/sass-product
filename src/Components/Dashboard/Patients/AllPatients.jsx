import React from 'react';
import FilterPatients from './FilterPatients';
import { useQuery } from '@tanstack/react-query';
import { getAllPatient } from '../../../lib/fetchReq';
import { Avatar, Dropdown, Flex, Spin, Menu } from 'antd';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useNavigate } from 'react-router-dom';

const AllPatients = () => {
	const navigate = useNavigate();
	const { data, error, isLoading } = useQuery({
		queryKey: ['getPatient'],
		queryFn: getAllPatient,
	});

	const navigateForSingleUser = (id) => {
		navigate(`/dashboard/patient/view/${id}`);
	};

	return (
		<div className="px-2 mt-14">
			<div class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow  w-[100%]">
				<FilterPatients />

				{/* table */}

				{isLoading ? (
					<Flex align="center" justify="center" className="py-10">
						<Spin size="large" />
					</Flex>
				) : (
					<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
						<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" class="px-6 py-3 text-center">
										#
									</th>
									<th scope="col" class="px-6 py-3 text-center">
										Patient
									</th>
									<th scope="col" class="px-6 py-3 text-center">
										Gender
									</th>
									<th scope="col" class="px-6 py-3 text-center">
										Blood Group
									</th>
									<th scope="col" class="px-6 py-3 text-center">
										Date Of Birth
									</th>
									<th scope="col" class="px-6 py-3 text-center">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{data?.patients?.map((patient, i) => (
									<>
										<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-b">
											<th
												scope="row"
												class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
											>
												{i + 1}
											</th>
											<td class="px-6 py-4">
												<div className="flex justify-center items-center gap-2">
													<Avatar size="large" src={patient.image} />
													<div className="flex flex-col">
														<span className="text-black font-semibold">
															{patient.name}
														</span>
														<span>{patient.phone}</span>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 text-center">
												<span
													className={
														patient.gender === 'male'
															? 'text-teal-600 bg-teal-100 p-2 rounded-lg capitalize font-semibold'
															: 'text-pink-600 bg-pink-100 p-2 rounded-lg capitalize font-semibold'
													}
												>
													{patient.gender}
												</span>
											</td>
											<td class="px-6 py-4 text-center">A+</td>
											<td class="px-6 py-4 text-center">{patient.date}</td>
											<td class="px-6 py-4 text-center">
												<button
													onClick={(e) => navigateForSingleUser(patient._id)}
													class="bg-teal-200 duration-300 text-black font-bold py-2 px-4 rounded mr-2"
												>
													<RemoveRedEyeOutlinedIcon className="mr-2" />
												</button>
												<button class="bg-teal-200 duration-300 text-white font-bold py-2 px-4 rounded">
													<DeleteOutlinedIcon className="mr-2 text-red-800" />
												</button>
											</td>
										</tr>
									</>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default AllPatients;
