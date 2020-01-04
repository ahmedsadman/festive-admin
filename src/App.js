import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route exact path='/main'>
					<Layout>
						<Header>Hi</Header>
					</Layout>
				</Route>
			</Switch>
		);
	}
}

export default App;
