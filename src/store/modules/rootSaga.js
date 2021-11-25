import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import redirect from './redirect/sagas';

export default function* rootSaga() {
  return yield all([auth, redirect]);
}
