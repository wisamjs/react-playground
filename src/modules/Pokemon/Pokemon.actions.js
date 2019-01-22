import createAction from '../../utils/actions';

export const GET_POKEMON = '@@POKEMON/GET_POKEMON';
export const GET_POKEMON_SUCCESS = `${GET_POKEMON}_SUCCESS`;

export const getPokemon = () => createAction(GET_POKEMON);
