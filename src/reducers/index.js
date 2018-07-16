// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { test } from './test'

const reducer = combineReducers({
  form: formReducer,
  test
})

export default reducer
