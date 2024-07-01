import {call, all, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  detailTrack,
  detailTrackError,
  detailTrackSuccess,
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

const getDetailTrackAPI = (value: string) => {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c19c47264b0dfd0973d63aa54cb6788c&mbid=${value}&format=json`,
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
      return json.track;
    })
    .catch(error => {
      throw error;
    });
};

function* detailTrackFlow(
  action: PayloadAction<any>,
): Generator<any, any, any> {
  try {
    const track = yield call(getDetailTrackAPI, action.payload);
    yield put(detailTrackSuccess(track));
  } catch (error) {
    yield put(detailTrackError(error));
  }
}

function* trackWatcher() {
  yield all([
    takeEvery(getTopTracks.type, getTopTracksFlow),
    takeEvery(detailTrack.type, detailTrackFlow),
  ]);
}

export default trackWatcher;
