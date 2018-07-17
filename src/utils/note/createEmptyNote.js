export const createEmptyNote = () => ({
  '_initDate': Date.now(),
  '_lastUpdate': Date.now(),
  'data': {
    'title': 'New note (empty)',
    'settings': {
      'color': '',
      'label-description': []
    },
    'columns': []
  }
})

export default createEmptyNote
