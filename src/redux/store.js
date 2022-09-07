import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './modeSlice';
import moodSlice from './moodSlice';
import rainSlice from './rainSlice';
import volumeSlice from './volumeSlice';
export const store = configureStore({
  reducer: {
    mode: modeSlice,
    mood: moodSlice,
    rain: rainSlice,
    volume: volumeSlice
  },
})