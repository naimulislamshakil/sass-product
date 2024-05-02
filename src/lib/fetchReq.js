import { baseUrl } from '../Redux/fetchApi';

export const getAllPatient = async () => {
	const res = await fetch(`${baseUrl}/getAllPatient`, {
		method: 'GET',
	});
	return res.json();
};
