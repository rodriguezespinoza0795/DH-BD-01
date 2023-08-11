import { User, UserSchema } from './user.model'
import { Sequelize } from 'sequelize'

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize))
}

export { setupModels }
