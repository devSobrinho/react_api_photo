import * as types from '../types';

// #### Actions to redirect

export function redirectRequest(payload) {
  return {
    type: types.REDIRECT_REQUEST,
    payload,
  };
}

export function redirectFailure(payload) {
  return {
    type: types.REDIRECT_FAILURE,
    payload,
  };
}

export function redirectHome(payload) {
  return {
    type: types.REDIRECT_HOME,
    payload,
  };
}

export function redirectLogin(payload) {
  return {
    type: types.REDIRECT_LOGIN,
    payload,
  };
}
