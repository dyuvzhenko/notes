const packager = require('electron-packager')
const path = require('path')
const fs = require('fs')

const options = {
  name: 'notebook-app',
  dir : __dirname,
  overwrite: true,
  ignore: false
}

packager(options)
  .then(appPaths => {
    const dataPath = path.resolve(__dirname, 'notebook-app-win32-x64', 'data')
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath)
    }
    console.log('Path of application: ', appPaths)
  })
