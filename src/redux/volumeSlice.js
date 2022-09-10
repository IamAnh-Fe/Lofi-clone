import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  volumeValue: 50,
  isPlaying: false
}

export const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
  changeVolume: (state, action) => {
  state.volumeValue = action.payload
  },
  changePlaying : (state) => {
    state.isPlaying = state.isPlaying === false ? true : false
  }

  },
})

// Action creators are generated for each case reducer function
export const {changeVolume, changePlaying} = volumeSlice.actions

export default volumeSlice.reducer