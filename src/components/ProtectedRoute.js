import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import tokenservice from '../helpers/tokenservice';

const ProtectedRoute = ({
	children,
	location,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (tokenservice.isValidToken()) {
					if (Component) {
						return <Component {...props} />;
					}
					return children;
				} else {
					return (
						/* Using history.push will cause bugs because history.push is 
						kind of state update and should not be used inside render() */
						<Redirect
							to={{
								pathname: '/',
								state: {
									message: 'You need to login to continue',
									from: location
								}
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default withRouter(ProtectedRoute);
