import {
  CREATE_EXAMPLE_NOTE,
  CREATE_EMPTY_NOTE
} from '../actions/_constants'

const initialState = {
  isUpdated: false /* TODO: maybe it can be deleted */
}

export function create(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_EXAMPLE_NOTE:
      return {
        isUpdated: true
      }
    case CREATE_EMPTY_NOTE:
      return {
        isUpdated: true
      }
    default:
      return state
  }
}
