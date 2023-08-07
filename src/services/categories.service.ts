class CategoryService {
  categories: { id: number; name: string }[]
  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'tech',
      },
      {
        id: 2,
        name: 'groseries',
      },
    ]
  }

  async create(body: { name: string }) {
    const id = this.categories.length + 1
    this.categories.push({ ...body, id: id })
    return this.categories.find(item => item.id === id, 10)
  }

  async find(offset: number, limit: number) {
    const start = offset
    const end = offset == 0 ? limit : offset * limit + 1
    return this.categories.slice(start, end)
  }

  async findOne(id: string) {
    const index = this.categories.findIndex(
      item => item.id === parseInt(id, 10),
    )
    if (index !== -1) {
      return this.categories.find(item => item.id === parseInt(id, 10))
    }
    return { message: 'Not Found' }
  }

  async update(id: string, body: { name: string }) {
    const index = this.categories.findIndex(
      item => item.id === parseInt(id, 10),
    )
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...body }
      return { message: 'Delete', id: id }
    }
    return { message: 'Not Found' }
  }

  async delete(id: string) {
    const index = this.categories.findIndex(
      item => item.id === parseInt(id, 10),
    )
    if (index !== -1) {
      this.categories.splice(index, 1)
      return { message: 'Delete', id: id }
    }
    return { message: 'Not Found' }
  }
}

export default CategoryService
