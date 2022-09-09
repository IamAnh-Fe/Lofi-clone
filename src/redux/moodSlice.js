import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  moodMode: 'chill'
}

export const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
  changeMoodStatus: (state, action) => {
  state.moodMode = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const {changeMoodStatus} = moodSlice.actions

export default moodSlice.reducer