import React, { Component } from 'react';
import axios from '../helpers/axios';
import { Grid, Segment, Header } from 'semantic-ui-react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import api from '../config/api';

class Events extends Component {
	state = {
		eventFormTitle: 'Create Event',
		eventList: [],
		listLoading: false
	};

	componentDidMount = () => {
		this.fetchEventList();
	};

	fetchEventList = async () => {
		this.setState({ listLoading: true });
		const response = await axios.get(api.eventList);
		console.log(response);
		this.setState({ eventList: response.data.events, listLoading: false });
	};

	handleChange = (prop, value) => this.setState({ [prop]: value });

	render() {
		return (
			<Grid>
				<Grid.Column width={9} stretched>
					<Segment
						style={{ border: 0, boxShadow: 'none' }}
						loading={this.state.listLoading}
					>
						<EventList data={this.state.eventList} />
					</Segment>
				</Grid.Column>
				<Grid.Column width={7}>
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
