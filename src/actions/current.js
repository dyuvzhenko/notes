import fs from 'fs'

import {
  RESET_STATE_CURRENT,
  UPDATE_CURRENT_NOTE,
  GET_CURRENT_NOTE,
  REMOVE_NOTE
} from './_constants'

import { history } from '../utils/history'
import { emptyColumn, emptyCard } from '../utils/note/validData'
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

export const changeColumnTitle = (columnNum, newTitle) => (dispatch, getState) => {
  const file = getState().current.data
  const newColumns = file.data.columns.map((e, i) => i === columnNum ? {...e, title: newTitle} : e)
  const note = {...file,
    data: {...file.data,
      columns: newColumns
    }
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}

export const saveLabelsDescription = (labelsDescription, callback) => (dispatch, getState) => {
  const file = getState().current.data
  const note = {...file,
    data: {...file.data,
      settings: {...file.data.settings,
        labelsDescription
      }
    }
  }
  rewriteFile(note, (file, filename) => {
    if (!file || !filename) {
      callback(true)
    } else {
      dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename })
      callback(false)
    }
  })
}

export const createCard = (columnNum) => (dispatch, getState) => {
  const file = getState().current.data
  let card = JSON.parse(JSON.stringify(emptyCard))
  card.title = 'new'
  const newColumns = file.data.columns.map((e, i) => i === columnNum ? {...e, cards: [...e.cards, card]} : e)
  const note = {...file,
    data: {...file.data,
      columns: newColumns
    }
  }
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}

export const changeCard = (columnNum, cardNum, card) => (dispatch, getState) => {
  const file = getState().current.data
  let note = JSON.parse(JSON.stringify(file)) /* lol */
  note.data.columns[columnNum].cards[cardNum] = card
  rewriteFile(note, (file, filename) => dispatch({ type: UPDATE_CURRENT_NOTE, data: file, filename }))
}
