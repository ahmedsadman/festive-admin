import React, { Component } from 'react';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import EventForm from '../components/EventForm';

class Events extends Component {
	state = {};
	handleChange = (e, { value }) => this.setState({ value });
	render() {
		return (
			<Grid>
				<Grid.Column width={8} stretched>
					<Segment>
						<Header>Part1</Header>
					</Segment>
				</Grid.Column>
				<Grid.Column width={8} stretched>
					<Segment>
						<EventForm
							title='Create Event'
							handleChange={this.handleChange}
							value={this.state.value}
						/>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Events;
