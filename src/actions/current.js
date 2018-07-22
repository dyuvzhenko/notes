import fs from 'fs'

import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE,
  REMOVE_NOTE
} from './_constants'

import { history } from '../utils/history'
import { emptyColumn } from '../utils/note/validData'
import { getFileByName, rewriteFile, removeFile } from '../utils/files'

export const resetStateCurrent = () => (dispatch) => dispatch({ type: RESET_STATE_CURRENT })

export const getCurrentNote = (filename) => (dispatch) => {
  dispatch({ type: GET_CURRENT_NOTE, data: getFileByName(filename), filename })
}

export const removeNote = () => (dispatch, getState) => {
  const filename = getState().current.filename
  removeFile(filename, (error) => {
    if (!error) {
      history.push({ pathname: '/home' })
      dispatch({ type: REMOVE_NOTE, error })
    } else {
      dispatch({ type: REMOVE_NOTE, error })
    }
  })
}

export const changeBackgroundColor = (colorObj) => (dispatch, getState) => {
  const file = getState().current.data
  const note = {...file,
    data: {...file.data,
      settings: {...file.data.settings, colorObj}
    }
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}

export const changeTitle = (title) => (dispatch, getState) => {
  const file = getState().current.data
  const note = {...file,
    data: {...file.data, title}
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}

export const pushNewColumn = () => (dispatch, getState) => {
  const file = getState().current.data
  const note = {...file,
    data: {...file.data,
      columns: [...file.data.columns, {...emptyColumn, title: 'new'}]
    }
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}

export const changeColumnTitle = (columNum, newTitle) => (dispatch, getState) => {
  const file = getState().current.data
  const newColumns = file.data.columns.map((e, i) => i === columNum ? {...e, title: newTitle} : e)
  const note = {...file,
    data: {...file.data,
      columns: newColumns
    }
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}
