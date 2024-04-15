import { toast } from 'react-toastify';

export const successToast = (mesg: string) => {
	toast.success(mesg, {
		position: 'top-right',
		theme: 'dark',
		hideProgressBar: true,
	});
};
export const errorToast = (mesg: string = 'Pleace check all input field.') => {
	toast.error(mesg, {
		position: 'top-right',
		theme: 'dark',
		hideProgressBar: true,
	});
};
