import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection()
    .then(() => {
        console.log('Database successfully connected')
    })
    .catch(() => {
        console.log('Failed to try to connect to database')
    })