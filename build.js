const packager = require('electron-packager')
const path = require('path')
const fs = require('fs')

const options = {
  name: 'notebook-app',
  dir : __dirname,
  overwrite: true,
  ignore: false
}

packager(options).then(appPaths => console.log('Path of application: ', appPaths))
