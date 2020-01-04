import React, { Component } from 'react';
import { Segment, Button, Header, Grid } from 'semantic-ui-react';
import Menu from './Menu';

class Layout extends Component {
	state = {
		activeItem: 'bio'
	};

	handleItemClick = name => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Grid style={{ padding: '1em' }}>
				<Grid.Column width={4}>
					<Segment textAlign='center'>
						<Header>ICT FEST - ADMIN</Header>
						<Button primary>User</Button>
						<Button>Logout</Button>
					</Segment>
					<Menu
						activeItem={activeItem}
						onItemClick={this.handleItemClick}
					/>
				</Grid.Column>

				<Grid.Column stretched width={12}>
					<Segment>{this.props.children}</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Layout;
