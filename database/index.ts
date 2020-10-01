import { Sequelize } from 'sequelize-typescript'
import dbConfig from '../config/database'

const sequelize = new Sequelize(dbConfig)

export default sequelize