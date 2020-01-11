import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuBar = props => {
	const { activeItem, onItemClick } = props;
	return (
		<Menu fluid vertical tabular>
			<Menu.Item
				name='Home'
				as={Link}
				to='/home'
				active={activeItem === 'Home'}
				onClick={() => onItemClick('Home')}
			/>
			<Menu.Item
				name='Events'
				as={Link}
				to='/events'
				active={activeItem === 'Events'}
				onClick={() => onItemClick('Events')}
			/>
			<Menu.Item
				name='Operations'
				as={Link}
				to='/operations'
				active={activeItem === 'Operations'}
				onClick={() => onItemClick('Operations')}
			/>
			<Menu.Item
				name='Account'
				as={Link}
				to='/account'
				active={activeItem === 'Account'}
				onClick={() => onItemClick('Account')}
			/>
		</Menu>
	);
};

export default MenuBar;
