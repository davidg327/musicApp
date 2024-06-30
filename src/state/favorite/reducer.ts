import {createSlice} from '@reduxjs/toolkit';
import { ITracks } from "../../utils/Interface.ts";

const initialState = {
  favorites: [] as ITracks[],
  activeFavorite: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action){
      state.favorites = [...state.favorites, action.payload];
      state.activeFavorite = true;
    },
    addFavoritesCache(state, action) {
      state.favorites = action.payload;
    },
    cleanFavorite(state) {
      state.activeFavorite = false;
    }
  },
});

export const {
  addFavorite,
  cleanFavorite,
  addFavoritesCache,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
