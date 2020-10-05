import fs from 'fs'

const infoStream = fs.createWriteStream('logs/info.txt')
const errorStream = fs.createWriteStream('logs/error.txt')

export default {
  info (message: string) {
    const response = new Date().toISOString() + ' : ' + message + '\n'
    infoStream.write(response)
  },

  error (message: string) {
    const response = new Date().toISOString() + ' : ' + message + '\n'
    errorStream.write(response)
  }
}
