import jwtdecode from 'jwt-decode';

/* A service class to handle access tokens */
class TokenService {
	name = 'festive_token'; // used to store in localstorage
	token = null;
	decoded = null;

	constructor() {
		this.token = localStorage.getItem(this.name);
		this.decoded = this.decodeToken();
	}

	getToken = () => {
		return this.token;
	};

	setToken = token => {
		this.clearToken();
		this.token = token;
		this.decoded = this.decodeToken();
		localStorage.setItem(this.name, token);
		console.log('new token set');
	};

	decodeToken = () => {
		if (this.token !== null) {
			this.decoded = jwtdecode(this.token);
			return this.decoded;
		}
		return null;
	};

	clearToken = () => {
		this.token = null;
		this.decoded = null;
		localStorage.removeItem(this.name);
		console.log('tokens cleared');
	};

	getClaims = () => {
		if (this.decoded) {
			return this.decoded.user_claims;
		}
		return null;
	};

	isValidToken = () => {
		// check if token is expired
		return this.decoded && this.decoded.exp - Date.now() / 1000 > 0;
	};
}

export default new TokenService();
