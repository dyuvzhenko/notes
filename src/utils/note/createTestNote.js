import { validNote, validLabelColors, validBackgroundColors } from './validData'
import fs from 'fs'

export const createTestNote = () => {
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
    'color': validBackgroundColors[Math.floor(Math.random() * validBackgroundColors.length)],
    'label-description': validLabelColors.map((color, i) => ({
      description: `description #${i + 1}`, color
    }))
  }

  /* Set 6 columns */
  const columnsLength = 6
  testNote.data['columns'] = []
  for (let i = 0; i < columnsLength; i++) {
    testNote.data['columns'].push({
      title: `Example colums #${i + 1}`,
      cards: []
    })
  }

  /* Set cards for each column, and messages */
  const markdownDescription = `
    ## Markdown is supported

    ======

    1. **bold item**
    2. _monospace item_
    3. \`item\`

    - **4 bold point**
    - _5 monospace point_
    - \`6 point\`

    > quote

    \`\`\`
      block
      quote
    \`\`\`
  `
  const markdownMessage = `
    ### Example message

    ======

    **Some** text...
  `
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

  fs.writeFile(`./data/note-${time}.json`, JSON.stringify(testNote, null, 2), (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}
