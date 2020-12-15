import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';
import TodoTextInput from './TodoTextInput';

interface Props {}

const Header: React.FC<Props> = observer(() => {
	return (
		<header>
			<h1>Todos</h1>
			<TodoTextInput />
		</header>
	);
});

export default Header;
