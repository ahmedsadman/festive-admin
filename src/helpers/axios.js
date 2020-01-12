import axios from 'axios';
import { API } from '../config/config';
import history from '../helpers/history';

const errorResponse = error => {
	// return error to caller if error is non-auth
	console.log('error is', error);
	if (error.response.status !== 401) {
		return Promise.reject(error);
	}

	// otherwise, force user to login
	history.push({
		pathname: '/',
		state: {
			message: 'You need to login to continue',
			from: history.location
		}
	});
	return Promise.reject(error);
};

export const axiosDefault = axios.create({
	baseURL: API.baseURL
});

export const getCancelToken = () => axios.CancelToken.source();

axiosDefault.interceptors.response.use(response => response, errorResponse);
