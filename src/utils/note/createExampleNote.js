import { validLabelColors, validBackgroundColors } from './validData'

export const createExampleNote = () => {
  let testNote = {}

  /* Set Timestamps */
  const time = Date.now()
  testNote['_initDate'] = time
  testNote['_lastUpdate'] = time

  /* Set title */
  testNote.data = {}
  testNote.data['title'] = 'Example Note'

  /* Set settings */
  testNote.data['settings'] = {
    'colorObj': validBackgroundColors[Math.floor(Math.random() * validBackgroundColors.length)],
    'labelsDescription': validLabelColors.map((colorObj, i) => ({
      description: `description #${i + 1}`, colorObj
    }))
  }

  /* Set 6 columns */
  const columnsLength = 6
  testNote.data['columns'] = []
  for (let i = 0; i < columnsLength; i++) {
    testNote.data['columns'].push({
      title: `Example column #${i + 1}`,
      cards: []
    })
  }

  /* Set cards for each column, and messages */
  const markdownDescription =
'\n' +
'# Markdown is supported' +
'\n -------------' + '\n' +
'1. **bold item** \n' +
'2. _monospace item_ \n' +
'3. \`item\` \n' +
'- **4 bold point** \n' +
'- _5 monospace point_ \n' +
'- \`6 point\` \n' +
'> quote \n\n' +
'\`\`\`' + `
block
quote
` + '\`\`\`'

  const markdownMessage =
    '### Example message\n'
    '======' +
    '\n' +
    '**Some** text...  \n'

  testNote.data.columns = testNote.data.columns.map((column, i) => {
    const lengthOfCards = columnsLength - i
    let cards = []
    for (let i = 0; i < lengthOfCards; i++) {
      cards.push({
        title: `Example card #${i + 1}`,
        description: markdownDescription,
        labels: [validLabelColors[Math.floor(Math.random() * validLabelColors.length)]],
        messages: [
          { date: Date.now(), text: markdownMessage },
          { date: Date.now(), text: markdownMessage }
        ]
      })
    }
    return { ...column, cards }
  })

  return testNote
}
