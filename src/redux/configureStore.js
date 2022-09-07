import { configureStore } from '@reduxjs/toolkit';
import { missionReducer } from './missions/missions';
import displayRockets from './Rockets/RocketsApi';

const store = configureStore({
  reducer: {
    rockets: displayRockets,
    missions: missionReducer,
  },
});

export default store;
