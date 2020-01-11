import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './containers/Login';
import Events from './containers/Events';

class App extends Component {
	genericNotFound = () => {
		return <h1>NOT FOUND</h1>;
	};

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/404' component={this.genericNotFound} />
				<Route>
					<Layout>
						<Switch>
							<ProtectedRoute exact path='/home'>
								<Header>Hi</Header>
							</ProtectedRoute>
							<ProtectedRoute
								exact
								path='/events'
								component={Events}
							/>
							<Redirect to='/404' />
						</Switch>
					</Layout>
				</Route>
			</Switch>
		);
	}
}

export default App;
