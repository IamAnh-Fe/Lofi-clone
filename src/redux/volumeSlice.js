import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  volumeValue: 50
}

export const volumeSlice = createSlice({
  name: 'volume',
  initialState,
  reducers: {
 
  },
})

// Action creators are generated for each case reducer function
export const {} = volumeSlice.actions

export default volumeSlice.reducer