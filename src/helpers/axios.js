import axios from 'axios';
import api from '../config/api';

const instance = axios.create({
	baseURL: api.baseURL,
	timeout: 5000
});

export default instance;
