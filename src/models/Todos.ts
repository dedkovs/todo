import { types } from 'mobx-state-tree';

export const Todo = types
	.model({
		id: types.identifierNumber,
		title: types.string,
		done: types.boolean,
	})
	.actions((self) => ({
		setTitle(title: string) {
			self.title = title;
		},

		toggle() {
			self.done = !self.done;
		},
	}));

export const Todos = types
	.model({
		todos: types.optional(types.array(Todo), []),
	})
	.actions((self) => ({
		// addTodo(todo: SnapshotIn<typeof Todo> | Instance<typeof Todo>) {
		addTodo(title: string) {
			// self.todos.push(todo);
			const id =
				self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
			self.todos.push({
				id,
				title,
				done: false,
			});
		},
	}));
