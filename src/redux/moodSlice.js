import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  moodMode: 'chill'
}

export const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
export const {} = moodSlice.actions

export default moodSlice.reducer