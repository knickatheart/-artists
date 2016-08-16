import { combineReducers } from 'redux';
import { FILTER } from '../actions/artists.js';

const filter = (state = {}, action) => {
	switch (action.type) {
		case FILTER:
			return state;
		default:
			return state;
	}
}

export default filter;