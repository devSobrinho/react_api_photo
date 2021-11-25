import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/token', payload);

    if (response.data.errors) {
      response.data.errors.map((e) => toast.error(e));
      console.log('aaq', response.data);
      return yield put(actions.loginFailure());
    }

    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Login feito com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    // IMPLEMENTS HISTORY
    payload.history.push(payload.prevPath);
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }
    yield put(actions.loginFailure());
    payload.history.push(payload.prevPath);
  }
}

// fara a persistencia de login por toda pagina
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  console.log('aq PERSISTE', token);
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, name, email, password, history } = payload;

  try {
    if (id) {
      yield call(axios.put, '/user', {
        email,
        name,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      yield call(axios.post, '/user', {
        email,
        name,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      // IMPLEMENTS HISTORY
      // history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      // IMPLEMENTS HISTORY
      // return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
