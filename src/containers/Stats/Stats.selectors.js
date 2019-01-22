// // most followed person
// // most popular pokemon
// // strongest pokemon

import { createSelector, createStructuredSelector } from 'reselect';
import {
	getAllPeople,
	getAllSavedPokemonIds,
} from '../../modules/People/People.selectors';
import { getAllPokemon } from '../../modules/Pokemon/Pokemon.selectors';

export const getListOfSavedPokemonIds = createSelector(
	getAllPeople,
	getAllSavedPokemonIds,
);

export const getPokemonsById = (pokemon, list) => {
	return list.map(id => pokemon[id]);
};

export const getListOfSavedPokemons = createSelector(
	getAllPokemon,
	getListOfSavedPokemonIds,
	getPokemonsById,
);

export const getStrSavedPokemonName = createSelector(
	getListOfSavedPokemons,
	list => {
		const strongestPokemon = list.reduce((strPokemon, pokemon) => {
			return strPokemon.base.Attack >= pokemon.base.attack
				? strPokemon
				: pokemon;
		}, list[0]);

		return strongestPokemon ? strongestPokemon.name.english : null;
	},
);
