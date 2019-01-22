import createAction from '../../utils/actions';

export const GET_PEOPLE = '@@PEOPLE/GET_PEOPLE';
export const GET_PEOPLE_SUCCESS = `${GET_PEOPLE}_SUCCESS`;

export const getPeople = () => createAction(GET_PEOPLE);
