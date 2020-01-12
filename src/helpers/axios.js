import axios from 'axios';
import { API } from '../config/config';
import history from '../helpers/history';

const errorResponse = error => {
	// return error to caller if error is non-auth
	if (error.response.status !== 401) {
		return Promise.reject(error);
	}

	// otherwise, force user to login
	history.push('/');
	return Promise.reject(error);
};

export const axiosDefault = axios.create({
	baseURL: API.baseURL
});

axiosDefault.interceptors.response.use(response => response, errorResponse);
