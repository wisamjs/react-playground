export const INITIAL_STATE = {};
import { GET_PEOPLE, GET_PEOPLE_SUCCESS } from './People.actions';

export default function people(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case GET_PEOPLE:
			return {
				loading: true,
			};
		case GET_PEOPLE_SUCCESS:
			return { all: action.payload };
		default:
			return state;
	}
}
