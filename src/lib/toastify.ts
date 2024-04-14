import { toast } from 'react-toastify';

export const successToast = (mesg: string) => {
	toast.success(mesg, {
		position: 'top-right',
		theme: 'dark',
		hideProgressBar: true,
	});
};
