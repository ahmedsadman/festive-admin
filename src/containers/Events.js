import React, { Component } from 'react';
import axios from '../helpers/axios';
import { Grid, Segment, Header } from 'semantic-ui-react';
import EventForm from '../components/EventForm';
import api from '../config/api';

class Events extends Component {
	state = {
		eventFormTitle: 'Create Event'
	};

	componentDidMount = () => {
		this.getData();
	};

	getData = async () => {
		const response = await axios.get(api.eventList);
		console.log(response);
	};

	handleChange = (prop, value) => this.setState({ [prop]: value });

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
							title={this.state.eventFormTitle}
							handleChange={this.handleChange}
							activeValue={this.state.activeValue}
							participationType={this.state.participationType}
						/>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Events;
