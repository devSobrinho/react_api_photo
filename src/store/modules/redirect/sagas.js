import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';

const linkRedirect = (link) => {
  if (link === '/') {
    return actions.redirectHome;
  }
  if (link === '/login') {
    console.log('login ate aq');
    return actions.redirectLogin;
  }
  return actions.redirectFailure;
};

function* redirectRequest({ payload }) {
  try {
    console.log('payload RedirectRequest:', payload);
    const { link } = payload;
    console.log('link', link);
    const redirect = yield call(linkRedirect, link);
    console.log('acton', redirect());
    const actionRedirect = yield put(redirect());
    console.log('chegou aq', redirect());

    // IMPLEMENTS HISTORY
    payload.history.push(link);
  } catch (e) {
    console.log(e);
    console.log('chegou e:', e);
    const errors = get(e, 'response.errors', []);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }
    yield put(actions.redirectFailure());
  }
}

export default all([takeLatest(types.REDIRECT_REQUEST, redirectRequest)]);
