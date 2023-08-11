import { sequelize } from '../libs/sequelize'

class UserService {
  // async create(body: { name: string }) {
  //   const id = this.categories.length + 1
  //   this.categories.push({ ...body, id: id })
  //   return this.categories.find(item => item.id === id, 10)
  // }

  async find(offset: string, limit: string) {
    const rta = await sequelize.models.User.findAll({
      offset: parseInt(offset, 10),
      limit: parseInt(limit, 10),
    })
    return rta
  }

  // async findOne(id: string) {
  //   const index = this.categories.findIndex(
  //     item => item.id === parseInt(id, 10),
  //   )
  //   if (index !== -1) {
  //     return this.categories.find(item => item.id === parseInt(id, 10))
  //   }
  //   return { message: 'Not Found' }
  // }

  // async update(id: string, body: { name: string }) {
  //   const index = this.categories.findIndex(
  //     item => item.id === parseInt(id, 10),
  //   )
  //   if (index !== -1) {
  //     this.categories[index] = { ...this.categories[index], ...body }
  //     return { message: 'Delete', id: id }
  //   }
  //   return { message: 'Not Found' }
  // }

  // async delete(id: string) {
  //   const index = this.categories.findIndex(
  //     item => item.id === parseInt(id, 10),
  //   )
  //   if (index !== -1) {
  //     this.categories.splice(index, 1)
  //     return { message: 'Delete', id: id }
  //   }
  //   return { message: 'Not Found' }
  // }
}

export default UserService
