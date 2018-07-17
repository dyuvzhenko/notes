export const validBackgroundColors = [
  '#9ACD32',  // #9ACD32
  '#CD5C5C',  // IndianRed
  '#FF8C00',  // DarkOrange
  '#9370DB',  // MediumPurple
  '#483D8B',  // DarkSlateBlue
  '#E6E6FA'  // Lavender
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
