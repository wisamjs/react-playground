import { takeEvery, select, put } from 'redux-saga/effects';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS } from './People.actions';
import { INIT_APP } from '../Application/Application.actions';

import fetch from 'node-fetch';

function* getAllPeople() {
	const url = 'https://api.myjson.com/bins/1251ik';
	const api = yield fetch(url, {
		mode: 'cors',
	});

	const response = yield api.json();

	yield put({ type: GET_PEOPLE_SUCCESS, payload: response });
}

function* beginGetPeople() {
	yield put({ type: GET_PEOPLE });
}

export function* saga() {
	yield takeEvery(INIT_APP, beginGetPeople);
	yield takeEvery(GET_PEOPLE, getAllPeople);
}
