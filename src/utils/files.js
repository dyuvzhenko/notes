import path from 'path'
import fs from 'fs'

export const config = {
  pathToNotesData: path.join(process.cwd(), 'app-data')
}

export const getFileByName = (filename) => JSON.parse(fs.readFileSync(path.join(config.pathToNotesData, filename), 'utf-8'))

export const getTimeString = (filename) => new Date(3444444)
