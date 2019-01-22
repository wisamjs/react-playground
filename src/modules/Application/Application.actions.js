import createAction from '../../utils/actions';

export const INIT_APP = '@@APP/INIT_APP';
export const INIT_APP_SUCCESS = `${INIT_APP}_SUCCESS`;

export const initApp = () => createAction(INIT_APP);
