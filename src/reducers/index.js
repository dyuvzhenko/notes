// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { notes } from './notes'
import { test } from './test'

const reducer = combineReducers({
  form: formReducer,
  notes,
  test
})

export default reducer
