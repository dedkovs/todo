import React from 'react';
import { Provider, rootStore } from './models/Root';
import Header from './components/Header';
// import logo from './logo.svg';
// import './App.css';

const App: React.FC = () => {
	return (
		<Provider value={rootStore}>
			<Header />
		</Provider>
	);
};

export default App;
