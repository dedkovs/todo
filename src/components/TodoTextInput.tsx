import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';
import { Input } from '../styles/Input';

interface Props {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
}

const TodoTextInput: React.FC<Props> = observer(({ text, setText }: Props) => {
	const { addTodo } = useMst();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTodo(text);
			setText('');
		}
	};

	return (
		<Input
			type="text"
			placeholder="What needs to be done?"
			autoFocus={true}
			value={text}
			onChange={handleChange}
			onKeyDown={handleSubmit}
		/>
	);
});

export default TodoTextInput;
