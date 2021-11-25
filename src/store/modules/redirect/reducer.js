import * as types from '../types';

const initialState = {
  link: '',
  isRedirect: false,
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REDIRECT_REQUEST: {
      const newState = { ...state };
      newState.isRedirect = true;
      return newState;
    }
    case types.REDIRECT_FAILURE: {
      const newState = { ...initialState };
      newState.errors.push('Página não existe');
      return newState;
    }
    case types.REDIRECT_HOME: {
      const newState = { ...state };
      newState.isRedirect = false;
      newState.link = '/';
      return newState;
    }

    default: {
      return state;
    }
  }
}
