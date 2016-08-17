import { FILTER, BYAGE, BYRATE, INIT } from '../actions/artists.js';
import data from 'json!../../payload/artists.json';
import { byAge, byRate } from '../utils/sort.js';

const filter = (state = {}, action) => {
	switch (action.type) {
		case INIT:
			return data.artists;
		case FILTER:
			return state;
		case BYAGE:
			return Object.assign([], state, state.sort(byAge));
		case BYRATE:
			return Object.assign([], state, state.sort(byRate));
		default:
			return state;
	}
}

export default filter;