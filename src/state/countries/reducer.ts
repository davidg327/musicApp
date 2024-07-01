import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  countries: [
    {id: 1, value: 'germany', title: 'Alemania'},
    {id: 2, value: 'spain', title: 'España'},
    {id: 3, value: 'united kingdom', title: 'Inglaterra'},
  ],
  countrySelect: {} as any,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    changeCountry(state, action) {
      state.countrySelect = action.payload;
    },
  },
});

export const {changeCountry} = countrySlice.actions;

export default countrySlice.reducer;
