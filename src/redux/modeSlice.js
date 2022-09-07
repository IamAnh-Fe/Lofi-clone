import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'day'
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
  setMode: (state) => {
    state.mode = state.mode === 'day' ? 'night' : 'day';
  }
  },
})

// Action creators are generated for each case reducer function
export const {setMode} = modeSlice.actions

export default modeSlice.reducer