import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions

const GET_MISSIONS = 'SpaceTravelersHub/mission/LOAD_MISSIONS';

const newMission = {
  item: [],
};
// Reducer
export const missionReducer = (state = newMission, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SpaceTravelersHub/mission/LOAD_MISSIONS/fulfilled':
      return {
        ...state,
        item: payload.value,
      };
    default:
      return state;
  }
};

// Action Creators

export const loadMissions = createAsyncThunk(GET_MISSIONS, async () => fetch('https://api.spacexdata.com/v3/missions')
  .then((res) => res.json())
  .then((json) => {
    const missions = [];
    json.forEach((element, index) => {
      const missionId = json[index].mission_id;
      const missionName = json[index].mission_name;
      const missionDescription = json[index].description;
      const mission = { missionId, missionName, missionDescription };
      missions.push(mission);
    });
    return { value: missions };
  }));
