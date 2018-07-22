import path from 'path'
import fs from 'fs'

import {
  RESET_STATE_NOTES,
  GET_NOTES_LIST_START,
  GET_NOTES_LIST_END
} from './_constants'

import { sortDesc } from '../utils/sorting'
import { config, getFileByName, getTimeString } from '../utils/files'

export const resetStateNotes = () => (dispatch) => dispatch({ type: RESET_STATE_NOTES })

export const getNotesList = () => (dispatch) => {
  dispatch({ type: GET_NOTES_LIST_START })
  new Promise((resolve, reject) => {
    let filenames = fs.readdirSync(config.pathToNotesData)
    filenames = sortDesc(filenames)
    const all = filenames.map((filename, index) => {
      const file = fs.readFileSync(path.join(config.pathToNotesData, filename), 'utf-8')
      // const file = getFileByName(filename)
      let result = null
      try {
        const _result = JSON.parse(file)
        const title = _result.data.title
        const colorObj = _result.data.settings.colorObj.color
        const time = getTimeString(filename)
        // TODO: помимо parse, здесь должна быть функция валидации абсолютно всех полей. Если будет не соответствие - кидаем ошибку.
        result = _result
      } catch (err) {
        console.log('Error!', err)
      }
      return {
        title: result === null ? null : result.data.title, /* title will be null, if data broken */
        colorObj: result === null ? null : result.data.settings.colorObj,
        time: result === null ? null : getTimeString(filename),
        filename
      }
    })
    resolve(all)
  })
  .then(all => dispatch({ type: GET_NOTES_LIST_END, all }))
}
