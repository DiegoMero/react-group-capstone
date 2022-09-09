import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions

const GET_MISSIONS = 'SpaceTravelersHub/mission/LOAD_MISSIONS';
const CHANGE_MISSION_STATUS = 'SpaceTravelersHub/mission/CHANGE_MISSION_STATUS';

// Reducer
export const missionReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SpaceTravelersHub/mission/LOAD_MISSIONS/fulfilled':
      return [...payload.value];
    case CHANGE_MISSION_STATUS:
      return state.map((item) => (
        item.missionId === action.value ? { ...item, reserved: !item.reserved } : item
      ));
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
      const mission = {
        missionId, missionName, missionDescription, reserved: false,
      };
      missions.push(mission);
    });
    return { value: missions };
  }));

export const changeMissionStatus = (id) => ({
  type: CHANGE_MISSION_STATUS,
  value: id,
});
