import {createSlice} from '@reduxjs/toolkit';
import {ITrack} from '../../utils/Interface.ts';

const initialState = {
  getTopTracksRequesting: false,
  getTopTracksSuccess: false,
  getTopTracksError: '',
  topTracks: [],
  page: 0,
  more: false,
  detailTrackRequesting: false,
  detailTrackSuccess: false,
  detailTrackError: '',
  track: {} as ITrack,
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    getTopTracks(state, action) {
      state.getTopTracksRequesting = true;
      state.page = action.payload.page + 1;
    },
    getTopTracksSuccess(state, action) {
      state.getTopTracksRequesting = false;
      state.getTopTracksSuccess = true;
      state.topTracks =
        state.page > 2
          ? state.topTracks.concat(action.payload)
          : action.payload;
      state.more = action.payload.length > 0;
    },
    getTopTracksError(state, action) {
      state.getTopTracksRequesting = false;
      state.getTopTracksError = action.payload;
    },
    detailTrack(state, action) {
      state.detailTrackRequesting = true;
      state.detailTrackSuccess = false;
      state.track = {} as ITrack;
    },
    detailTrackSuccess(state, action) {
      state.detailTrackRequesting = false;
      state.detailTrackSuccess = true;
      state.track = action.payload;
    },
    detailTrackError(state, action) {
      state.detailTrackRequesting = false;
      state.detailTrackError = action.payload;
    },
  },
});

export const {
  getTopTracks,
  getTopTracksSuccess,
  getTopTracksError,
  detailTrack,
  detailTrackSuccess,
  detailTrackError,
} = trackSlice.actions;

export default trackSlice.reducer;
