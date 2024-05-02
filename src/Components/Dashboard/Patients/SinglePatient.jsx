import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Spin } from 'antd';
import { baseUrl } from '../../../Redux/fetchApi';

const SinglePatient = () => {
	const { id } = useParams();
	console.log({ id });

	const { data, error, isLoading } = useQuery({
		queryKey: ['singlePatient', id],
		queryFn: async () => {
			const res = await fetch(`${baseUrl}/getSinglePatient/${id}`, {
				method: 'GET',
			});
			return res.json();
		},
	});

	console.log({ data, error, isLoading });
	return (
		<div>
			{isLoading ? (
				<Flex align="center" justify="center" className="py-10">
					<Spin size="large" />
				</Flex>
			) : (
				''
			)}
		</div>
	);
};

export default SinglePatient;
