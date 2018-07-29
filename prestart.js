const path = require('path')
const fs = require('fs')

const dataPath = path.resolve(__dirname, 'app-data')
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath)
  console.log(`! Folder was created: ${dataPath}`)
}
