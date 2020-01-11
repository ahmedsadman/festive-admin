import React, { Component } from 'react';
import { axiosDefault } from '../helpers/axios';
import { Grid, Segment } from 'semantic-ui-react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import { API } from '../config/config';

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
		const response = await axiosDefault.get(API.eventList);
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
