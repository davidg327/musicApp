import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  getTopTracksRequesting: false,
  getTopTracksSuccess: false,
  getTopTracksError: '',
  topTracks: [],
  page: 0,
  more: false,
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
  },
});

export const {getTopTracks, getTopTracksSuccess, getTopTracksError} =
  trackSlice.actions;

export default trackSlice.reducer;
