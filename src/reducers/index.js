// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { current } from './current'
import { notes } from './notes'

const reducer = combineReducers({
  form: formReducer,
  current,
  notes
})

export default reducer
