import { toast } from 'react-toastify';

export const successToast = (mesg) => {
	toast.success(mesg, {
		position: 'top-right',
		theme: 'dark',
	});
};
export const errorToast = (mesg = 'Pleace check all input field.') => {
	toast.error(mesg, {
		position: 'top-right',
		theme: 'dark',
	});
};
