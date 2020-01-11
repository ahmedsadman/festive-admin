import axios from 'axios';
import { API } from '../config/config';

export const axiosDefault = axios.create({
	baseURL: API.baseURL
});
