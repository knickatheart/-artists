import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Reducers
import artists from '../reducers/artists.js';

import { loadState, saveState } from './localStorage.js';

const persistedState = loadState();

const enhancer = compose(
	applyMiddleware(
		createLogger(),
		thunkMiddleware
	),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(
	combineReducers({
		artists
	}),
	persistedState,
	enhancer
);

store.subscribe(() => {
	saveState({
		artists: store.getState().artists
	});
});