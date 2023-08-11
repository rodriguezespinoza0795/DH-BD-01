import { Sequelize } from 'sequelize'
import { config } from '../config/config'
import { setupModels } from './../db/models'

const USER = encodeURIComponent(config.dbUser as string)
const PASSWORD = encodeURIComponent(config.dbPassword as string)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize: Sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
})

setupModels(sequelize)

sequelize.sync()

export { sequelize }
