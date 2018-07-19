import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE,
  REMOVE_NOTE
} from '../actions/_constants'

const initialState = {
  data: null,
  filename: null,
  removeError: null,
  processRewrite: false, // TODO: block all operations, if file is rewrited
  pending: true
}

export function current(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_STATE_CURRENT:
      return initialState
    case UPDATE_CURRENT_NOTE:
      return {
        ...state,
        data: action.data,
        filename: action.filename
      }
    case GET_CURRENT_NOTE:
      return {
        ...state,
        pending: false,
        data: action.data,
        filename: action.filename
      }
    case REMOVE_NOTE:
      return {
        ...state,
        data: action.error ? state.data : null,
        filename: action.error ? state.filename : null,
        removeError: action.error ? action.error : null
      }
    default:
      return state
  }
}
