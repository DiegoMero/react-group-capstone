import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchApi = createAsyncThunk(
  'rockets/fetchApi',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
    cancelRocket: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: false } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },
  extraReducers: {
    [fetchApi.fulfilled]: (state, action) => {
      const rockets = action.payload.map((el) => ({
        rocketId: el.id,
        rocketName: el.rocket_name,
        rocketDesc: el.description,
        rocketImg: el.flickr_images[0],
        rocketWiki: el.wikipedia,
      }));
      return rockets;
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
