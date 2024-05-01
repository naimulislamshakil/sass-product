import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal, Upload } from 'antd';
import axios, { Axios } from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { errorToast, successToast } from '../../../lib/toastify';
import { useNavigate } from 'react-router-dom';

const AddPatient = ({ handleCancel, handleOk, open }) => {
	const [fileList, setFileList] = useState([]);
	const navigate = useNavigate();
	const [currentDate, setDate] = useState();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [emergancy, setemErgancy] = useState('');
	const [gender, setGender] = useState('');
	const [address, setAddress] = useState('');

	const handelSubmit = () => {
		const url = 'https://api.cloudinary.com/v1_1/dopm2zqga/image/upload';
		const date = dayjs(currentDate).format('DD/MM/YYYY');

		const formData = new FormData();
		formData.append('file', fileList);
		formData.append('upload_preset', 'deelnfzk');

		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.secure_url) {
					const patient = {
						name,
						email,
						phone,
						emergancy,
						gender,
						address,
						date,
						image: data.secure_url,
					};

					axios
						.post('http://localhost:5000/addPatient', patient)
						.then((data) =>
						{
							console.log(data);
							if (data.data.status === 200) {
								successToast(data.data.message);
								handleOk();
							}
						})
						.catch((err) => {
							if (err) {
								errorToast(err?.response?.data?.message);
								if (err?.response?.data?.message === 'You Are Not Logged In.') {
									navigate('/login');
								}
							}
						});
				}
			});
	};

	const onChange = (date) => {
		setDate(date);
	};

	return (
		<>
			<Modal
				title="Create Patients"
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				okButtonProps={{ disabled: true }}
				cancelButtonProps={{ disabled: true }}
			>
				<div>
					<form class="p-4 md:p-5">
						<div class="grid gap-4 mb-4 grid-cols-2">
							<div class="col-span-2">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									placeholder="MD. Naimul Islam Shakil"
									required
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
							</div>

							{/* email */}

							<div class="col-span-2">
								<label
									for="email"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									placeholder="example@gmail.com"
									required
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>

							{/* phone */}

							<div class="col-span-2">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Phone Number
								</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									placeholder="+8801879212420"
									required
									onChange={(e) => setPhone(e.target.value)}
									value={phone}
								/>
							</div>

							{/* Emergency */}

							<div class="col-span-2">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Emergency Phone Number
								</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									placeholder="+8801879212420"
									required
									onChange={(e) => setemErgancy(e.target.value)}
									value={emergancy}
								/>
							</div>

							{/* Gender */}
							<div class="col-span-2">
								<label
									for="category"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Gender
								</label>
								<select
									id="category"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									required
									onChange={(e) => setGender(e.target.value)}
									value={gender}
								>
									<option selected="">Select Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>

							{/* DOB */}

							<div class="col-span-2 w-full">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Date of Barth
								</label>
								<DatePicker
									value={currentDate}
									onChange={onChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
								/>
							</div>

							{/* Address */}

							<div class="col-span-2">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Address
								</label>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									placeholder="Road-21, Sector-11, Uttara, Dhaka-1230, Bangladesh"
									required
									onChange={(e) => setAddress(e.target.value)}
									value={address}
								/>
							</div>

							{/* image */}

							<div class="col-span-2">
								<label
									class="block mb-2 text-sm font-medium text-gray-900"
									for="file_input"
								>
									Upload file
								</label>
								<input
									onChange={(event) => setFileList(event.target.files[0])}
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
									id="file_input"
									type="file"
								/>
							</div>
						</div>
					</form>

					<div className="pl-4">
						<button
							onClick={(e) => handelSubmit()}
							className="text-white inline-flex items-center bg-teal-600 hover:bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							<PlusOutlined className="mr-2" />
							Add new product
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default AddPatient;
