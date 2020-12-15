import React from 'react';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { Todo } from '../models/Todos';
import { TodoItemContainer } from '../styles/TodoItemContainer';
import { CheckboxContainer } from '../styles/CheckboxContainer';
import { HiddenCheckbox } from '../styles/HiddenCheckbox';
import { StyledCheckbox } from '../styles/StyledCheckbox';
import { Icon } from '../styles/Icon';
import { TodoTitle } from '../styles/TodoTitle';

interface Props {
	todo: Instance<typeof Todo>;
}

const TodoItem: React.FC<Props> = observer(({ todo }: Props) => {
	return (
		<TodoItemContainer checked={todo.done}>
			<CheckboxContainer>
				<HiddenCheckbox
					type="checkbox"
					checked={todo.done}
					onChange={() => todo.toggle()}
				/>
				<StyledCheckbox checked={todo.done}>
					<Icon viewBox="0 0 24 24">
						<polyline points="20 6 9 17 4 12" />
					</Icon>
				</StyledCheckbox>
			</CheckboxContainer>
			<TodoTitle checked={todo.done}>{todo.title}</TodoTitle>
		</TodoItemContainer>
	);
});

export default TodoItem;
