import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { current } from './current'
import { create } from './create'
import { notes } from './notes'

const reducer = combineReducers({
  form: formReducer,
  current,
  create,
  notes
})

export default reducer
