import jwtdecode from 'jwt-decode';

/* A service class to handle access tokens (in-memory) */
class TokenService {
	token = null;
	decoded = null;

	getToken = () => {
		return this.token;
	};

	setToken = token => {
		this.clearToken();
		this.token = token;
	};

	decodeToken = () => {
		if (this.decoded !== null) {
			return this.decoded;
		} else if (this.token !== null) {
			this.decoded = jwtdecode(this.token);
			console.log('token decoded');
			return this.decoded;
		}
		return null;
	};

	clearToken = () => {
		this.token = null;
		this.decoded = null;
		console.log('tokens cleared');
	};

	getClaims = () => {
		const decoded = this.decodeToken();
		if (decoded) {
			return decoded.user_claims;
		}
		return null;
	};
}

export default new TokenService();
