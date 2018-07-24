const packager = require('electron-packager')
const path = require('path')
const fs = require('fs')

const options = {
  name: 'notebook-app',
  platform: 'win32',
  arch: 'x64', // 'x64' or 'ia32'
  dir : __dirname,
  overwrite: true,
  ignore: false
}

packager(options)
  .then(appPaths => {
    const dataPath = path.resolve(__dirname, `${options.name}-${options.platform}-${options.arch}`, 'app-data')
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath)
    }
    console.log('Path of application: ', appPaths)
  })
