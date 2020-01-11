import React, { Component } from 'react';
import { axiosDefault } from '../helpers/axios';
import { API } from '../config/config';
import tokenservice from '../helpers/tokenservice';
import LoginForm from '../components/LoginForm';

class Login extends Component {
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
	}

	handleChange = (name, value) => {
		this.setState({ [name]: value });
	};

	onButtonClick = () => {
		if (this.state.email === '' || this.state.password === '') {
			return this.setState({ error: 'Please fill up all the fields' });
		}
		this.loginUser();
	};

	loginUser = async () => {
		try {
			this.setState({ loading: true, error: null });
			const bodyData = {
				username: this.state.username,
				password: this.state.password
			};
			const response = await axiosDefault.post(API.login, bodyData);
			console.log(response);
			if (response.status === 200) {
				// save the token in memory
				tokenservice.setToken(response.data.access_token);
				this.props.history.push('/home');
			}
		} catch (e) {
			console.log(e.response);
			this.setState({ error: e.response.data.message, loading: false });
		}
	};

	render() {
		return (
			<LoginForm
				error={this.state.error}
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
