import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import tokenservice from '../helpers/tokenservice';

const ProtectedRoute = ({
	children,
	location,
	history,
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
					history.push({
						pathname: '/',
						state: {
							message: 'You need to login to continue',
							from: location
						}
					});
				}
			}}
		/>
	);
};

export default withRouter(ProtectedRoute);
