import { combineReducers } from 'redux';

import auth from './auth/reducers';
import redirect from './redirect/reducer';

export default combineReducers({
  auth,
  redirect,
});
