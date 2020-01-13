import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'top',
	timer: 3000,
	showConfirmButton: false
});

export const showToast = (type, title) => {
	Toast.fire({
		icon: type,
		title
	});
};
