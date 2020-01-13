import React, { Component } from 'react';
import { axiosDefault, axiosAuth, getCancelToken } from '../helpers/axios';
import { Grid, Segment } from 'semantic-ui-react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import { API } from '../config/config';

class Events extends Component {
	cancelToken = getCancelToken();
	state = {
		eventFormTitle: 'Create Event',
		eventList: null,
		listLoading: false,
		listError: null,
		activeValue: 'yes',
		participationType: 'single'
	};

	componentDidMount() {
		this.fetchEventList();
	}

	componentWillUnmount() {
		this.cancelToken.cancel();
	}

	fetchEventList = async () => {
		try {
			this.setState({ listLoading: true });
			const response = await axiosDefault.get(API.eventList, {
				cancelToken: this.cancelToken.token
			});
			console.log(response);
			this.setState({
				eventList: response.data.events,
				listLoading: false
			});
		} catch (e) {
			console.log(e);
			this.setState({ listError: e.message, listLoading: false });
		}
	};

	createEvent = async () => {
		try {
			this.setState({ formLoading: true });
			const bodyData = {
				name: this.state.eventName,
				payable_amount: parseInt(this.state.generalFee),
				team_participation: this.state.participationType === 'team'
			};
			const response = await axiosAuth.post(API.eventCreate, bodyData);
			console.log(response);
			this.setState({ formLoading: false });

			// after a successful creation, update the event list
			this.fetchEventList();
		} catch (e) {
			this.setState({ formLoading: false });
			console.log(e);
			console.log(e.response);
		}
	};

	removeEvent = async id => {
		try {
			const response = await axiosAuth.delete(API.eventID(id));
			console.log(response);

			// update event list
			this.fetchEventList();
		} catch (e) {
			console.log(e);
			console.log(e.response);
		}
	};

	onEventCreate = () => {
		const { eventName, rulebookURL } = this.state;
		if (!eventName || !rulebookURL) {
			return;
		}
		this.createEvent();
	};

	onEventRemove = eventId => {
		console.log(eventId);
		this.removeEvent(eventId);
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
						<EventList
							data={this.state.eventList}
							error={this.state.listError}
							onEventRemove={this.onEventRemove}
						/>
					</Segment>
				</Grid.Column>
				<Grid.Column width={7}>
					<Segment>
						<EventForm
							title={this.state.eventFormTitle}
							loading={this.state.formLoading}
							handleChange={this.handleChange}
							activeValue={this.state.activeValue}
							participationType={this.state.participationType}
							onCreate={this.onEventCreate}
						/>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Events;
