import path from 'path'
import fs from 'fs'

import {
  GET_NOTES_LIST_START,
  GET_NOTES_LIST_END
} from './_constants'
import { config, getFileByName, getTimeString } from '../utils/files'

export const getNotesList = () => (dispatch) => {
  dispatch({ type: GET_NOTES_LIST_START })
  new Promise((resolve, reject) => {
    const filenames = fs.readdirSync(config.pathToNotesData)
    const all = filenames.map((filename, index) => {
      const file = fs.readFileSync(path.join(config.pathToNotesData, filename), 'utf-8')
      // const file = getFileByName(filename)
      let result = null
      try {
        const _result = JSON.parse(file)
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
