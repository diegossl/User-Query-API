import 'reflect-metadata'
import path from 'path'
import { createConnection } from 'typeorm'

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123',
  database: 'nodejs_challenge',
  entities: [path.resolve(__dirname, '..', 'app/models/*.ts')], // lembrar de mudar para *js
  synchronize: true,
  logging: false
})
  .then(() => {
    console.log('Database successfully connected')
  })
  .catch(() => {
    console.log('Failed to try to connect to database')
  })
