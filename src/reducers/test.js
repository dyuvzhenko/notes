import {
  TEST_CHECK
} from '../actions/_constants'

const initialState = {
  check: false
}

export function test(state = initialState, action = {}) {
  switch (action.type) {
    case TEST_CHECK:
      return {
        ...state,
        check: true
      }
    default:
      return state
  }
}
