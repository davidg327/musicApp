import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  countries: [
    {id: 1, value: 'germany', title: 'Alemania'},
    {id: 2, value: 'spain', title: 'España'},
    {id: 3, value: 'united kingdom', title: 'Inglaterra'},
  ],
  countrySelect: {
    id: 1,
    value: 'germany',
    title: 'Alemania',
  },
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
});

export const {} = countrySlice.actions;

export default countrySlice.reducer;
