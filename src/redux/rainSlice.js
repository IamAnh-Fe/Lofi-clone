import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rainMode: 'clear',
  rainValue: 0,

}

export const rainSlice = createSlice({
  name: 'rain',
  initialState,
  reducers: {
  changeRainStatus: (state, action) => {
    state.rainMode = state.rainMode === 'clear' ? 'rain' : 'clear';
    state. rainValue = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const {changeRainStatus} = rainSlice.actions

export default rainSlice.reducer