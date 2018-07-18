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
  fs.writeFile(`./app-data/note-${newTimeStamp}.json`, JSON.stringify(newFile, null, 2), (err) => {
    if (!err) {
      fs.unlink(`./app-data/note-${oldTimeStamp}.json`, (err) => {
        if (!err) {
          callback(newFile)
        }
      })
    }
  })
}
