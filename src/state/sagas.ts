import {all, fork} from 'redux-saga/effects';
import TrackSagas from './track/sagas.ts';

export function* Sagas() {
  yield all([fork(TrackSagas)]);
}
