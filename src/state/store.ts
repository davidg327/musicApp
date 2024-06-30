import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {Sagas} from './sagas';
import trackReducer from './track/reducer.ts';
import countryReducer from './countries/reducer.ts';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    track: trackReducer,
    country: countryReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(Sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
