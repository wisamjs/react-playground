global.fetch = require('jest-fetch-mock');

import * as pokemonSaga from './Pokemon.saga';
import { GET_POKEMON, GET_POKEMON_SUCCESS } from './Pokemon.actions';
import { put, call } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

jest.setTimeout(70000);
//done due to adding a delay in saga
//to illustrate slow api call

describe('Pokemon Saga', () => {
	describe('Style #1', () => {
		describe('beginGetAllPokemon', () => {
			it('should dispatch the correct action', () => {
				const generator = pokemonSaga.beginGetAllPokemon();
				expect(generator.next().value).toEqual(
					put({ type: GET_POKEMON }),
				);
			});
		});

		describe('getAllPokemon', () => {
			const fetchedData = {
				0: {
					name: 'Charizard',
				},
				15: {
					name: 'Mew',
				},
			};

			const generator = pokemonSaga.getAllPokemon();
			it('should fetch all pokemon', () => {
				expect(generator.next().value).toEqual(
					call(pokemonSaga.fetchPokemon),
				);
			});

			it('should correctly dispatch an action with the data', () => {
				expect(generator.next(fetchedData).value).toEqual(
					put({ type: GET_POKEMON_SUCCESS, payload: fetchedData }),
				);
			});
		});
	});

	describe('Style #2', () => {
		let dispatched = [];

		beforeEach(() => {
			fetch.resetMocks();

			dispatched = [];
		});

		describe('getAllPokemon', () => {
			it('should correctly dispatch an action with the data', async () => {
				const mockApiCallOutput = JSON.stringify({
					0: {
						name: 'Charizard',
					},
					15: {
						name: 'Mew',
					},
				});

				const action = {};
				const expectedAction = {
					type: GET_POKEMON_SUCCESS,
					payload: JSON.parse(mockApiCallOutput),
				};

				fetch.mockResponse(mockApiCallOutput);

				await runSaga(
					{
						dispatch: action => dispatched.push(action),
						state: () => {
							pokemon: {
								loading: true;
							}
						},
					},
					pokemonSaga.getAllPokemon,
					action,
				).done;

				const dispatchedAction = dispatched[0];
				expect(dispatchedAction).toEqual(expectedAction);
			});
		});
	});
});
