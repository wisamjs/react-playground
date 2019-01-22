import { takeEvery, select, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GET_POKEMON, GET_POKEMON_SUCCESS } from './Pokemon.actions';
import { INIT_APP } from '../Application/Application.actions';
import fetch from 'node-fetch';

function* getAllPokemon() {
	try {
		const url = 'https://api.myjson.com/bins/cptzg';
		const api = yield fetch(url, {
			mode: 'cors',
		});

		/* any data-massaging can happen here before dispatching the action to the reducer*/
		const response = yield api.json();
		yield delay(5000);
		yield put({ type: GET_POKEMON_SUCCESS, payload: response });
	} catch (error) {
		//dispatch error action such as GET_POKEMON_ERROR
	}
}

function* beginGetAllPokemon() {
	yield put({ type: GET_POKEMON });
}

export function* saga() {
	yield takeEvery(INIT_APP, beginGetAllPokemon);
	yield takeEvery(GET_POKEMON, getAllPokemon);
}
