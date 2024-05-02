import { baseUrl } from '../Redux/fetchApi';

export const getAllPatient = async () => {
	const res = await fetch(`${baseUrl}/getAllPatient`, {
		method: 'GET',
	});
	return res.json();
};

export const getSinglePatient = async ({ id }) => {
	console.log(id);
	const res = await fetch(`${baseUrl}/getSinglePatient/${id}`, {
		method: 'GET',
	});
	return res.json();
};
