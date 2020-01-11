import React, { Component } from 'react';
import { Segment, Button, Header, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import tokenservice from '../helpers/tokenservice';
import Menu from './Menu';

class Layout extends Component {
	state = {
		activeItem: 'Home'
	};

	handleItemClick = name => this.setState({ activeItem: name });

	onLogout = () => {
		tokenservice.clearToken();
		this.props.history.replace('/');
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Grid style={{ padding: '1em' }}>
				<Grid.Column width={3}>
					<Segment textAlign='center'>
						<Header>ICT FEST - ADMIN</Header>
						<Button primary>User</Button>
						<Button onClick={this.onLogout}>Logout</Button>
					</Segment>
					<Menu
						activeItem={activeItem}
						onItemClick={this.handleItemClick}
					/>
				</Grid.Column>

				<Grid.Column stretched width={13}>
					<Segment>{this.props.children}</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default withRouter(Layout);
