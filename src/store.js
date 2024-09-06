import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './features/metrics/metricsSlice';
import streamsReducer from './features/streams/streamsSlice';

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    streams: streamsReducer,
  },
});
