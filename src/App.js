import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Events from './containers/Events';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route path='/'>
					<Layout>
						<Switch>
							<Route path='/home'>
								<Header>Hi</Header>
							</Route>
							<Route path='/events'>
								<Events />
							</Route>
						</Switch>
					</Layout>
				</Route>
			</Switch>
		);
	}
}

export default App;
