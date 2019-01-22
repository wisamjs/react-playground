import { createSelector } from 'reselect';

const getPokemonProp = obj => obj.pokemon;
const getLoadingProp = obj => obj.loading;
const getAllProp = (obj = {}) => obj.all;

export const isLoadingPokemon = createSelector(
	getPokemonProp,
	getLoadingProp,
);

export const getAllPokemon = createSelector(
	getPokemonProp,
	getAllProp,
);
