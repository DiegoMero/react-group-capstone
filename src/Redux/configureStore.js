import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { missionReducer } from './missions/missions';
import rocketSlice from './Rockets/RocketsApi';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
