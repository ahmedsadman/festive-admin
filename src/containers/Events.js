import React, { Component } from 'react';
import { axiosDefault, getCancelToken } from '../helpers/axios';
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
		listError: null
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
						/>
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
