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
      'labelsDescription': []
    },
    'columns': []
  }
})

export default createEmptyNote
