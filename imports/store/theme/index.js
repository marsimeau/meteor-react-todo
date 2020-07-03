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

export const { actions } = slice

export * as operations from './operations'
export * as selectors from './selectors'

export default slice.reducer
