import React from 'react';
import { Header, Button, Card, Message } from 'semantic-ui-react';

const EventList = props => {
	const { data, error } = props;
	const renderEventList = () => {
		if (error) {
			return (
				<Message negative>
					<Message.Header>{error}</Message.Header>
					<p>Sorry the list could not be fetched</p>
				</Message>
			);
		}
		if (data && data.length === 0) {
			return (
				<Message info>
					<Message.Header>No events found</Message.Header>
				</Message>
			);
		}
		return (
			data !== null &&
			data.map(item => (
				<Card key={item.id}>
					<Card.Content>
						<Card.Header>{item.name}</Card.Header>
						<Card.Meta>
							Active: {item.active ? 'Yes' : 'No'}
						</Card.Meta>
						<Card.Meta>
							Payable Amount: {item.payable_amount}
						</Card.Meta>
						<Card.Meta>
							Participation Type:{' '}
							{(item.team_participation && 'Team') || 'Single'}
						</Card.Meta>
					</Card.Content>
					<Card.Content extra>
						<div className='ui two buttons'>
							<Button basic color='green'>
								Edit
							</Button>
							<Button basic color='red'>
								Remove
							</Button>
						</div>
					</Card.Content>
				</Card>
			))
		);
	};
	return (
		<React.Fragment>
			<Header>Events</Header>
			<Card.Group>{renderEventList()}</Card.Group>
		</React.Fragment>
	);
};

export default EventList;
