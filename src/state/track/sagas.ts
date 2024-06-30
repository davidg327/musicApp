import {call, all, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  getTopTracks,
  getTopTracksError,
  getTopTracksSuccess,
} from './reducer.ts';

const getTopTracksAPI = (value: string, page: number) => {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${value}&limit=10&page=${page}&api_key=c19c47264b0dfd0973d63aa54cb6788c&format=json`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.json())
    .then(json => {
      return json.tracks.track;
    })
    .catch(error => {
      throw error;
    });
};

function* getTopTracksFlow(
  action: PayloadAction<any>,
): Generator<any, any, any> {
  try {
    const {value, page} = action.payload;
    const topTracks = yield call(getTopTracksAPI, value, page);
    yield put(getTopTracksSuccess(topTracks));
  } catch (error) {
    yield put(getTopTracksError(error));
  }
}

function* trackWatcher() {
  yield all([takeEvery(getTopTracks.type, getTopTracksFlow)]);
}

export default trackWatcher;
