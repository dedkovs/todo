import { types } from 'mobx-state-tree';

export const Todo = types
	.model({
		id: types.identifierNumber,
		title: types.string,
		done: types.boolean,
	})
	.actions((self) => ({
		toggle() {
			self.done = !self.done;
		},
	}));

export const Todos = types
	.model({
		todos: types.optional(types.array(Todo), []),
	})
	.actions((self) => ({
		addTodo(title: string) {
			const id =
				self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
			self.todos.push({
				id,
				title,
				done: false,
			});
		},
	}));
