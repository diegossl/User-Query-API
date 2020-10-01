import 'reflect-metadata'
import { createConnection } from 'typeorm'
import User from '../app/models/User'

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'nodejs_challenge',
    entities: [User],
    synchronize: true,
    logging: false
}).then(connection => {
    console.log('Database successfully connected')
}).catch(error => {
    console.log('Failed to try to connect to database')
})