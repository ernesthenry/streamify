import { createSlice } from '@reduxjs/toolkit';

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    totalUsers: 0,
    activeUsers: 0,
    totalStreams: 0,
    revenue: {
      subscriptions: 0,
      ads: 0,
    },
    topArtist: '',
  },
  reducers: {
    setMetrics: (state, action) => {
      state.totalUsers = action.payload.totalUsers;
      state.activeUsers = action.payload.activeUsers;
      state.totalStreams = action.payload.totalStreams;
      state.revenue = action.payload.revenue;
      state.topArtist = action.payload.topArtist;
    },
  },
});

export const { setMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
