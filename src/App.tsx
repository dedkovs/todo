import React from 'react';
import { Provider, rootStore } from './models/Root';
import TodoList from './components/TodoList';
import TodoTextInput from './components/TodoTextInput';
import { AppContainer } from './styles/AppContainer';
import { Header } from './styles/Header';

const App: React.FC = () => {
	const [text, setText] = React.useState('');

	return (
		<Provider value={rootStore}>
			<AppContainer>
				<Header>
					<h1>Todo List</h1>
				</Header>
				<TodoTextInput text={text} setText={setText} />
				<TodoList text={text} />
			</AppContainer>
		</Provider>
	);
};

export default App;
