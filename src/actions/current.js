import fs from 'fs'

import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE
} from './_constants'

import { getFileByName } from '../utils/files'

export const resetStateCurrent = () => (dispatch) => dispatch({ type: RESET_STATE_CURRENT })

export const getCurrentNote = (filename) => (dispatch) => {
  dispatch({ type: GET_CURRENT_NOTE, data: getFileByName(filename) }) /* here should be callback */
}

export const changeBackgroundColor = (colorObj) => (dispatch, getState) => {
  const file = getState().current.data
  const oldTimeStamp = file['_lastUpdate']
  const newTimeStamp = Date.now()
  const note = {
    ...file,
    ['_lastUpdate']: newTimeStamp,
    data: {
      ...file.data,
      settings: {
        ...file.data.settings,
        colorObj
      }
    }
  }
  fs.writeFile(`./app-data/note-${newTimeStamp}.json`, JSON.stringify(note, null, 2), (err) => { // TODO: function rewriteFile(newFile, callback) - in callback after all, dispatch
    if (!err) {
      fs.unlink(`./app-data/note-${oldTimeStamp}.json`, (err) => {
        if (!err) {
          dispatch({ type: UPDATE_CURRENT_NOTE, data: note })
        }
      })
    }
  })
}
