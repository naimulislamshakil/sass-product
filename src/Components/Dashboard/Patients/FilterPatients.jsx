import React from 'react';
import { DatePicker } from 'antd';
import { FilterListOutlined } from '@mui/icons-material';

const { RangePicker } = DatePicker;

const FilterPatients = () => {
	return (
		<div className="grid grid-cols-5 gap-1 justify-center items-center">
			<div>
				<input
					type="search"
					class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary w-full"
					placeholder="Search Patients"
					aria-label="Search"
					id="exampleFormControlInput2"
					aria-describedby="button-addon2"
				/>
			</div>
			<div className="w-full">
				<select class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary w-full">
					<option value="new">Newest Patients</option>
					<option value="old">Oldest Patients</option>
				</select>
			</div>
			<div>
				<select class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary w-full">
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>
			<div>
				<RangePicker className="py-[0.40rem]" />
			</div>
			<div>
				<button className="w-full py-[0.40rem] rounded-md text-white font-semibold flex justify-center items-center bg-teal-600 hover:bg-teal-500">
					{' '}
					Filter <FilterListOutlined className="ml-3" />
				</button>
			</div>
		</div>
	);
};

export default FilterPatients;
