/* Something like documentation */

export const defaultBackgroundColor = '#E6E6FA' /* deprecated? */

export const validBackgroundColors = [
  { color: '#9ACD32', name: 'YellowGreen' },
  { color: '#CD5C5C', name: 'IndianRed' },
  { color: '#FF8C00', name: 'DarkOrange' },
  { color: '#9370DB', name: 'MediumPurple' },
  { color: '#483D8B', name: 'DarkSlateBlue' },
  { color: '#1E90FF', name: 'DodgerBlue' }
]

export const validLabelColors = [
  { color: '#0000FF', name: 'Blue' },
  { color: '#008000', name: 'Green' },
  { color: '#FFFF00', name: 'Yellow' },
  { color: '#FF0000', name: 'Red' }
]

export const validNote = {
  '_initDate': '',
  '_lastUpdate': '',
  'data': {
    'title': '',
    'settings': {
      'colorObj': validBackgroundColors[0],
      'labelsDescription': validLabelColors.map(e => ({
        description: '',
        colorObj: e  // like unique id
      }))
    },
    'columns': [{
      'title': '',
      'cards': [{
        'title': '',
        'description': '',
        'labels': [validLabelColors[0], validLabelColors[1]],
        'messages': [{
          'text': '',
          'date': ''
        }]
      }]
    }]
  }
}

export const emptyColumn = {
  'title': '',
  'cards': []
}

export const emptyCard = {
  'title': '',
  'description': '',
  'labels': [],
  'messages': []
}
