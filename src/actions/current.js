import {
  GET_CURRENT_NOTE_START,
  GET_CURRENT_NOTE_END
} from './_constants'

import { getFileByName } from '../utils/files'

export const getCurrentNote = (filename) => (dispatch) => {
  dispatch({ type: GET_CURRENT_NOTE_START })
  dispatch({ type: GET_CURRENT_NOTE_END, data: getFileByName(filename) })
}
