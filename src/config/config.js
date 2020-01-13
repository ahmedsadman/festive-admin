export class API {
	static baseURL = 'http://festmanagement-dev.herokuapp.com';
	static login = '/auth/login';
	static eventList = '/event/list';
	static eventID = id => `/event/${id}`;
	static eventCreate = '/event/create';
}
