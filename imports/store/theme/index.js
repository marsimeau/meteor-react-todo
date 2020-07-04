import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'
import theme from '../../../theme'

const slice = createSlice({
  name: 'theme',
  initialState: {
    primary: theme.colors.primary
  },
  reducers
})

export const {
  setPrimary
} = slice.actions

export * from './operations'
export * from './selectors'

export default slice.reducer
