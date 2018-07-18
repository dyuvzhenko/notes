import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE
} from '../actions/_constants'

const initialState = {
  data: null,
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
        data: action.data
      }
    case GET_CURRENT_NOTE:
      return {
        ...state,
        pending: false,
        data: action.data
      }
    default:
      return state
  }
}
