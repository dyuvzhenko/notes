import { validLabelColors } from './validData'

export const createEmptyNote = () => ({
  '_initDate': Date.now(),
  '_lastUpdate': Date.now(),
  'data': {
    'title': 'New note (empty)',
    'settings': {
      'colorObj': {
        'color': null,
        'name': null
      },
      'labelsDescription': validLabelColors.map(e => ({
        description: '',
        colorObj: e
      }))
    },
    'columns': []
  }
})

export default createEmptyNote
