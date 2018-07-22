import path from 'path'
import fs from 'fs'

export const config = {
  pathToNotesData: path.join(process.cwd(), 'app-data')
}

export const getFileByName = (filename) => JSON.parse(fs.readFileSync(path.join(config.pathToNotesData, filename), 'utf-8'))

export const getTimeString = (filename) => new Date(3444444)

export const rewriteFile = (file, callback) => {
  let newFile = JSON.parse(JSON.stringify(file))
  const oldTimeStamp = newFile['_lastUpdate']
  const newTimeStamp = Date.now()
  newFile['_lastUpdate'] = newTimeStamp
  const newFileName = `note-${newTimeStamp}.json`
  fs.writeFile(`./app-data/${newFileName}`, JSON.stringify(newFile, null, 2), (err) => {
    if (!err) {
      fs.unlink(`./app-data/note-${oldTimeStamp}.json`, (err) => {
        if (!err) {
          callback(newFile, newFileName)
        } else {
          callback(null)
        }
      })
    } else {
      callback(null)
    }
  })
}

export const removeFile = (filename, callback) =>
  fs.unlink(`./app-data/${filename}`, (err) => callback(err))
