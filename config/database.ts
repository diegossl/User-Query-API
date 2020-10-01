import path from 'path'

export default {
  database: 'nodejs_challenge',
  dialect: 'mysql',
  username: 'root',
  password: 'root123',
  storage: ':memory:',
  models: [path.resolve(__dirname, '..', 'api', 'models', '*.ts')]
}