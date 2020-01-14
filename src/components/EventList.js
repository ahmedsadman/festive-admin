import React from 'react';
import { Header, Button, Card, Message } from 'semantic-ui-react';

const EventList = props => {
	const { data, error, onEventRemove } = props;
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
							Participation Type:{' '}
							{(item.team_participation && 'Team') || 'Single'}
						</Card.Meta>
						<Card.Meta>
							<a
								href={item.rulebook_url}
								target='_blank'
								rel='noopener noreferrer'
								style={{ color: 'teal' }}
							>
								Rulebook URL
							</a>
						</Card.Meta>
						<Card.Meta>
							Payable Amount: {item.payable_amount}
						</Card.Meta>
						{item.payable_university && (
							<Card.Meta>
								Payable University: {item.payable_university}
							</Card.Meta>
						)}
						{item.payable_college && (
							<Card.Meta>
								Payable College: {item.payable_college}
							</Card.Meta>
						)}
						{item.payable_school && (
							<Card.Meta>
								Payable School: {item.payable_school}
							</Card.Meta>
						)}
					</Card.Content>
					<Card.Content extra>
						<div className='ui two buttons'>
							<Button basic color='green'>
								Edit
							</Button>
							<Button
								basic
								color='red'
								onClick={() => onEventRemove(item.id)}
							>
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
