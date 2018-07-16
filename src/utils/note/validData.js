export const validBackgroundColors = [
  'LimeGreen',  // #32CD32
  'IndianRed',  // #CD5C5C
  'DarkOrange',  // #FF8C00
  'MediumPurple',  // #9370DB
  'DarkSlateBlue',  // #483D8B
  'Lavender'  // #E6E6FA
  /* Еще бы */
]

export const validLabelColors = [
  '#0000FF', // Blue
  '#008000', // Green
  '#FFFF00', // Yellow
  '#FF0000' // Red
]

export const validNote = {
  '_initDate': '',
  '_lastUpdate': '',
  'data': {
    'title': '',
    'settings': {
      'color': '',
      'label-description': [{
        'color': validLabelColors[0], // like unique id
        'description': ''
      }]
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
