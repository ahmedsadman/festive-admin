import React from 'react';
import { Header, Form, Grid } from 'semantic-ui-react';

const EventCreate = props => {
	const { value, handleChange, title } = props;
	return (
		<React.Fragment>
			<Header>{title}</Header>
			<Form>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='Event Name'
						placeholder='My Event'
						required
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='General Fee'
						placeholder='My Event'
						required
					/>
					<Form.Input
						fluid
						label='College Fee'
						placeholder='My Event'
					/>
					<Form.Input
						fluid
						label='Student Fee'
						placeholder='My Event'
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='Rulebook URL'
						placeholder='My Event'
						required
					/>
				</Form.Group>
				<Form.Group inline>
					<label>Active</label>
					<Form.Radio
						label='Yes'
						value='yes'
						checked={value === 'yes'}
						onChange={handleChange}
					/>
					<Form.Radio
						label='No'
						value='no'
						checked={value === 'no'}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group inline>
					<label>Participation Type</label>
					<Form.Radio
						label='Single'
						value='single'
						checked={value === 'single'}
						onChange={handleChange}
					/>
					<Form.Radio
						label='Team'
						value='team'
						checked={value === 'team'}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Checkbox label='I agree to the Terms and Conditions' />

				<Form.Button style={{ margin: '0.5em 0' }} primary>
					Submit
				</Form.Button>
			</Form>
		</React.Fragment>
	);
};

export default EventCreate;
