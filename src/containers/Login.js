import React, { Component } from 'react';
import { axiosDefault, getCancelToken } from '../helpers/axios';
import { API } from '../config/config';
import tokenservice from '../helpers/tokenservice';
import LoginForm from '../components/LoginForm';

class Login extends Component {
	cancelToken = getCancelToken(); // used with axios
	state = {
		error: null,
		username: '',
		password: '',
		loading: false
	};

	componentDidMount() {
		if (tokenservice.isValidToken()) {
			this.props.history.push('/home');
		}
		console.log(this.props);
	}

	componentWillUnmount() {
		this.cancelToken.cancel();
	}

	handleChange = (name, value) => {
		this.setState({ [name]: value });
	};

	onButtonClick = () => {
		if (this.state.email === '' || this.state.password === '') {
			return this.setState({ error: 'Please fill up all the fields' });
		}
		const { state } = this.props.location;
		// login and redirect the user from where he came from
		state && state.from ? this.loginUser(state.from) : this.loginUser();
	};

	loginUser = async (redirectPath = '/home') => {
		try {
			this.setState({ loading: true, error: null });
			const bodyData = {
				username: this.state.username,
				password: this.state.password
			};
			const response = await axiosDefault.post(API.login, bodyData, {
				cancelToken: this.cancelToken.token
			});
			console.log(response);
			if (response.status === 200) {
				// save the token in memory
				tokenservice.setToken(response.data.access_token);
				this.props.history.push(redirectPath);
			}
		} catch (e) {
			console.log(e);
			this.setState({
				error: e.response && e.response.data.message,
				loading: false
			});
		}
	};

	render() {
		const { state } = this.props.location;
		return (
			<LoginForm
				error={this.state.error}
				message={state && state.message}
				email={this.state.email}
				password={this.state.password}
				handleChange={this.handleChange}
				onButtonClick={this.onButtonClick}
				loading={this.state.loading}
			/>
		);
	}
}

export default Login;
