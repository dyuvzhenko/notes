import {
  GET_CURRENT_NOTE_START,
  GET_CURRENT_NOTE_END
} from '../actions/_constants'

const initialState = {
  data: [],
  pending: false
}

export function current(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CURRENT_NOTE_START:
      return {
        ...initialState,
        pending: true
      }
    case GET_CURRENT_NOTE_END:
      return {
        ...state,
        pending: false,
        data: action.data
      }
    default:
      return state
  }
}
