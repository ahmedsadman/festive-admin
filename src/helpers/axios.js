import axios from 'axios';
import { API } from '../config/config';
import history from '../helpers/history';
import tokenservice from '../helpers/tokenservice';

export const axiosDefault = axios.create({
	baseURL: API.baseURL
});

export const axiosAuth = axios.create({
	baseURL: API.baseURL,
	headers: {
		Authorization:
			(tokenservice.getToken() && `Bearer ${tokenservice.getToken()}`) ||
			null
	}
});

export const getCancelToken = () => axios.CancelToken.source();

//  -- Axios Interceptors --
// get the latest available token before each request
axiosAuth.interceptors.request.use(config => {
	const token = tokenservice.getToken();
	config.headers['Authorization'] = `Bearer ${token}`;
	return config;
});

// handle unauthorized errors in response
axiosAuth.interceptors.response.use(
	response => response,
	error => {
		// return error to caller if error is non-auth
		console.log('error is', error);
		if (error.response.status !== 401) {
			return Promise.reject(error);
		}

		// otherwise, force user to login
		console.log(history);
		history.push({
			pathname: '/',
			state: {
				message: 'You need to login to continue',
				from: history.location
			}
		});
		return Promise.reject(error);
	}
);
