import { createSelector } from 'reselect';
import { findMode } from '../../utils/helpers';
const getPeopleProp = obj => obj.people;
const getAllProp = obj => obj.all;
const getLoadingProp = obj => obj.loading;
const getNameProp = (obj = {}) => obj.name;

export const isLoadingPeople = createSelector(
	getPeopleProp,
	getLoadingProp,
);

export const getAllPeople = createSelector(
	getPeopleProp,
	getAllProp,
);

export const getAllFollowed = (people = {}) => {
	const ids = Object.keys(people);
	return ids.reduce((list, id) => list.concat(people[id].followIds), []);
};

export const getAllSavedPokemonIds = (people = {}) => {
	const ids = Object.keys(people);
	return ids.map(id => people[id].savedPokemonIds).flatten();
};

export const getListOfFollowedPeople = createSelector(
	getAllPeople,
	a => {
		return getAllFollowed(a);
	},
);

export const getMostFollowedPersonId = createSelector(
	getListOfFollowedPeople,
	list => findMode(list),
);

export const getPersonById = (people, id = 0) => (people ? people[id] : {});

export const getMostFollowedPerson = createSelector(
	getAllPeople,
	getMostFollowedPersonId,
	getPersonById,
);

export const getMostFollowedPersonName = createSelector(
	getMostFollowedPerson,
	getNameProp,
);
