import { takeEvery, select, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GET_POKEMON, GET_POKEMON_SUCCESS } from './Pokemon.actions';
import { INIT_APP } from '../Application/Application.actions';

export function* fetchPokemon() {
	const url = 'https://api.myjson.com/bins/cptzg';
	const api = yield fetch(url, {
		mode: 'cors',
	});
	yield delay(5000);
	const response = yield api.json();
	return response;
}

export function* getAllPokemon() {
	try {
		const response = yield call(fetchPokemon);

		/* any data-massaging can happen here before dispatching the action to the reducer*/

		yield put({ type: GET_POKEMON_SUCCESS, payload: response });
	} catch (error) {
		//dispatch error action such as GET_POKEMON_ERROR
	}
}

export function* beginGetAllPokemon() {
	yield put({ type: GET_POKEMON });
}

export function* saga() {
	yield takeEvery(INIT_APP, beginGetAllPokemon);
	yield takeEvery(GET_POKEMON, getAllPokemon);
}
