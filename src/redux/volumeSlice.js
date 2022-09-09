import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  volumeValue: 50
}

export const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
  changeVolume: (state, action) => {
  state.volumeValue = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const {changeVolume} = volumeSlice.actions

export default volumeSlice.reducer