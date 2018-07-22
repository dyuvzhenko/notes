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
  { color: '#32CD32', name: 'LimeGreen' },
  { color: '#6495ED', name: 'CornflowerBlue' },
  { color: '#00BFFF', name: 'DeepSkyBlue' },
  { color: '#00CED1', name: 'DarkTurquoise' },
  { color: '#FF8C00', name: 'DarkOrange' }
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
