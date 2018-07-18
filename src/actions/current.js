import fs from 'fs'

import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE
} from './_constants'

import { getFileByName, rewriteFile } from '../utils/files'

export const resetStateCurrent = () => (dispatch) => dispatch({ type: RESET_STATE_CURRENT })

export const getCurrentNote = (filename) => (dispatch) => {
  dispatch({ type: GET_CURRENT_NOTE, data: getFileByName(filename) }) /* here should be callback */
}

export const changeBackgroundColor = (colorObj) => (dispatch, getState) => {
  const file = getState().current.data
  const note = {...file,
    data: {...file.data,
      settings: {...file.data.settings,
        colorObj
      }
    }
  }
  rewriteFile(note, (file) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file }))
}
