import { useContext, createContext } from 'react';
import { Instance, onSnapshot } from 'mobx-state-tree';
import { Todos } from './Todos';

let initialState = Todos.create();

const data = localStorage.getItem('rootState');
if (data) {
	const json = JSON.parse(data);
	if (Todos.is(json)) {
		initialState = Todos.create(json);
	}
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
	localStorage.setItem('rootState', JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof Todos>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const Provider = RootStoreContext.Provider;

export function useMst() {
	const store = useContext(RootStoreContext);
	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider');
	}
	return store;
}
