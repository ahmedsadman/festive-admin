import React from 'react';
import { Header, Form } from 'semantic-ui-react';

const EventCreate = props => {
	const {
		activeValue,
		participationType,
		title,
		handleChange,
		eventName,
		rulebookURL,
		collegeFee,
		schoolFee,
		generalFee,
		loading,
		onCreate
	} = props;

	const onChange = (e, { value, name }) => {
		handleChange(name, value);
		console.log(name, value);
	};

	return (
		<React.Fragment>
			<Header>{title}</Header>
			<Form loading={loading}>
				{/* In Form, control state field name (from parent) needs to be matched with 'name' field in Form element */}
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						name='eventName'
						label='Event Name'
						value={eventName}
						placeholder='My Event'
						onChange={onChange}
						required
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						name='generalFee'
						value={generalFee}
						label='General Fee'
						onChange={onChange}
					/>
					<Form.Input
						fluid
						label='College Fee'
						value={collegeFee}
						name='collegeFee'
						onChange={onChange}
					/>
					<Form.Input
						fluid
						label='School Fee'
						value={schoolFee}
						name='schoolFee'
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						name='rulebookURL'
						value={rulebookURL}
						label='Rulebook URL'
						placeholder='http://example.com/rulebook.pdf'
						onChange={onChange}
						required
					/>
				</Form.Group>
				<Form.Group inline>
					<label>Active</label>
					<Form.Radio
						label='Yes'
						value='yes'
						checked={
							activeValue === 'yes' || activeValue == null
						} /* default check */
						name='activeValue'
						onChange={onChange}
					/>
					<Form.Radio
						label='No'
						value='no'
						checked={activeValue === 'no'}
						name='activeValue'
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group inline>
					<label>Participation Type</label>
					<Form.Radio
						label='Single'
						value='single'
						name='participationType'
						checked={
							participationType === 'single' ||
							participationType == null
						} /* default check */
						onChange={onChange}
					/>
					<Form.Radio
						label='Team'
						value='team'
						name='participationType'
						checked={participationType === 'team'}
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Button
					style={{ margin: '0.5em 0' }}
					primary
					onClick={onCreate}
				>
					Save
				</Form.Button>
			</Form>
		</React.Fragment>
	);
};

export default EventCreate;
