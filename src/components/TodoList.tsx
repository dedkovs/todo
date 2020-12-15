import React from 'react';
import { observer } from 'mobx-react-lite';
import { useMst } from '../models/Root';
import TodoItem from './TodoItem';
import { TodoListContainer } from '../styles/TodoListContainer';

interface Props {
	text: string;
}

const TodoList: React.FC<Props> = observer(({ text }: Props) => {
	const { todos } = useMst();

	return (
		<TodoListContainer>
			{todos
				.filter((todo) => {
					return todo.title.indexOf(text) > -1;
				})
				.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
		</TodoListContainer>
	);
});

export default TodoList;
