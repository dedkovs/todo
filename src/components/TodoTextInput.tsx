import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';

interface Props {}

const TodoTextInput: React.FC<Props> = observer(() => {
	const { rootState } = useMst();
	const [state, setState] = React.useState({ text: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState({ text: e.target.value });
	};

	const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// const text = e.target.value.trim();
		if (e.key === 'Enter') {
			rootState.addTodo(state.text);
			// if (newTodo) {
			setState({ text: '' });
			// }
		}
	};

	return (
		<input
			type="text"
			placeholder="What needs to be done?"
			autoFocus={true}
			value={state.text}
			onChange={handleChange}
			onKeyDown={handleSubmit}
		/>
	);
});

export default TodoTextInput;
