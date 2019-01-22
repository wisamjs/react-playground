import * as selectors from './Pokemon.selectors';
describe('Pokemon Selectors', () => {
	describe('getAllPokemon', () => {
		it('should get all pokemon', () => {
			const state = {
				pokemon: {
					all: {
						0: {
							name: 'Charizard',
						},
					},
				},
			};

			expect(selectors.getAllPokemon(state)).toEqual({
				0: {
					name: 'Charizard',
				},
			});
		});

		it('should handle no pokemon and return undefined', () => {
			const state = {
				pokemon: {},
			};

			expect(selectors.getAllPokemon(state)).toEqual(undefined);
		});
	});
});
