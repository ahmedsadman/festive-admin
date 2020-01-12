import React from 'react';
import {
	Button,
	Form,
	Grid,
	Header,
	Icon,
	Message,
	Segment
} from 'semantic-ui-react';

const LoginForm = props => {
	const {
		error,
		username,
		password,
		handleChange,
		onButtonClick,
		loading,
		message
	} = props;

	const onChange = (e, { value, name }) => {
		handleChange(name, value);
	};

	return (
		<Grid
			textAlign='center'
			style={{ height: '100vh' }}
			verticalAlign='middle'
		>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' color='teal' textAlign='center'>
					<Icon name='credit card' size='big' /> Festive Admin
				</Header>
				<Form size='large' loading={loading}>
					<Segment stacked>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder='Username'
							name='username'
							value={username}
							onChange={onChange}
						/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							type='password'
							name='password'
							value={password}
							onChange={onChange}
						/>

						<Button
							color='teal'
							fluid
							size='large'
							onClick={onButtonClick}
						>
							Login
						</Button>
					</Segment>
				</Form>
				{error !== null && <Message negative>{error}</Message>}
				{message && <Message info>{message}</Message>}
			</Grid.Column>
		</Grid>
	);
};

export default LoginForm;
