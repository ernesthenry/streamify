import { createSlice } from '@reduxjs/toolkit';

export const streamsSlice = createSlice({
  name: 'streams',
  initialState: [],
  reducers: {
    setStreams: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStreams } = streamsSlice.actions;
export default streamsSlice.reducer;
