import fs from 'fs'

import {
  CREATE_EXAMPLE_NOTE,
  CREATE_EMPTY_NOTE
} from './_constants'

import { createExampleNote as _createExampleNote } from '../utils/note/createExampleNote'
import { createEmptyNote as _createEmptyNote } from '../utils/note/createEmptyNote'

export const createExampleNote = () => (dispatch) => {
  const note = _createExampleNote()
  fs.writeFile(`./app-data/note-${note['_initDate']}.json`, JSON.stringify(note, null, 2), (err) => {
    if (!err) {
      dispatch({ type: CREATE_EXAMPLE_NOTE })
    }
  })
}

export const createEmptyNote = () => (dispatch) => {
  const note = _createEmptyNote()
  fs.writeFile(`./app-data/note-${note['_initDate']}.json`, JSON.stringify(note, null, 2), (err) => {
    if (!err) {
      dispatch({ type: CREATE_EMPTY_NOTE })
    }
  })
}
