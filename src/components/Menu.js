import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuBar = props => {
	const { activeItem, onItemClick } = props;
	return (
		<Menu fluid vertical tabular>
			<Menu.Item
				name='bio'
				active={activeItem === 'bio'}
				onClick={() => onItemClick('bio')}
			/>
			<Menu.Item
				name='pics'
				active={activeItem === 'pics'}
				onClick={() => onItemClick('pics')}
			/>
			<Menu.Item
				name='companies'
				active={activeItem === 'companies'}
				onClick={() => onItemClick('companies')}
			/>
			<Menu.Item
				name='links'
				active={activeItem === 'links'}
				onClick={() => onItemClick('links')}
			/>
		</Menu>
	);
};

export default MenuBar;
