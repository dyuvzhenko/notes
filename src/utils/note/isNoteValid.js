/* here we need check data, before application start work. Validate absolutely all fields. */
import { validNote, validBackgroundColors, validLabelColors } from './validData'

const checkObjectLength = (noteObj, validNoteObj) => {
  if (Object.keys(noteObj).length !== Object.keys(validNoteObj).length) {
    throw `Invalid count of properties`
  }
}

const checkObjectProperties = (noteObj, validNoteObj) => {
  Object.keys(noteObj).forEach(e => {
    const tryFindProperty = Object.keys(validNoteObj).find(_e => _e === e)
    if (!tryFindProperty) {
      throw `Invalid ${e}`
    }
  })
}

const checkType = (value, type) => {
  if (type === 'array') {
    if (!Array.isArray(value)) {
      throw `Invalid type`
    }
  } else {
    if (typeof value !== type) {
      throw `Invalid type`
    }
  }
}

const isNoteValid = (note) => {
  let isValid = true
  try {
    /* first properties */
    checkObjectLength(note, validNote)
    checkObjectProperties(note, validNote)
    checkType(note['_initDate'], 'number')
    checkType(note['_lastUpdate'], 'number')
    checkType(note['data'], 'object')

    /* data property */
    checkObjectLength(note.data, validNote.data)
    checkObjectProperties(note.data, validNote.data)
    checkType(note.data['title'], 'string')
    checkType(note.data['settings'], 'object')
    checkType(note.data['columns'], 'array')

    /* data.settings properties */
    checkObjectLength(note.data.settings, validNote.data.settings)
    checkObjectProperties(note.data.settings, validNote.data.settings)
    checkType(note.data.settings['colorObj'], 'object')
    checkObjectProperties(note.data.settings.colorObj, validNote.data.settings.colorObj)
    checkType(note.data.settings['labelsDescription'], 'array')

    /* data.columns properties */
    note.data.columns.forEach(elem => {
      checkObjectLength(elem, validNote.data.columns[0])
      checkObjectProperties(elem, validNote.data.columns[0])
      checkType(elem['title'], 'string')
      checkType(elem['cards'], 'array')

      elem.cards.forEach(_elem => {
        checkType(_elem['title'], 'string')
        checkType(_elem['description'], 'string')
        checkType(_elem['labels'], 'array')
      })
    })
  } catch (err) {
    isValid = false
  }

  return isValid
}

export { isNoteValid }
