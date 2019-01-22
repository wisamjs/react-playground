export const INITIAL_STATE = {};
import { GET_POKEMON, GET_POKEMON_SUCCESS } from './Pokemon.actions';

export default function pokemon(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case GET_POKEMON:
			return {
				loading: true,
			};
		case GET_POKEMON_SUCCESS:
			return { all: action.payload };
		default:
			return state;
	}
}
