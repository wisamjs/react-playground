import { createSelector } from 'reselect';

import { isLoadingPeople } from '../../modules/People/People.selectors';
import { isLoadingPokemon } from '../../modules/Pokemon/Pokemon.selectors';

export const isLoading = createSelector(
	isLoadingPeople,
	isLoadingPokemon,
	(loadingA = false, loadingB = false) => {
		return loadingA || loadingB;
	},
);
