import boom from '@hapi/boom'
class ProductService {
  products: { id: number; name: string; price: number }[]
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'producto1',
        price: 1000,
      },
      {
        id: 2,
        name: 'producto2',
        price: 2000,
      },
      {
        id: 3,
        name: 'producto3',
        price: 1000,
      },
      {
        id: 4,
        name: 'producto4',
        price: 2000,
      },
    ]
  }

  async create(body: { name: string; price: number }) {
    const id = this.products.length + 1
    this.products.push({ ...body, id: id })
    return this.products.find(item => item.id === id, 10)
  }

  async find(offset: number, limit: number) {
    const start = offset
    const end = offset == 0 ? limit : offset * limit + 1
    return this.products.slice(start, end)
  }

  async findOne(id: string) {
    const product = this.products.find(item => item.id === parseInt(id, 10))
    if (!product) {
      return boom.notFound()
    }
    return product
  }

  async update(id: string, body: { name: string }) {
    const index = this.products.findIndex(item => item.id === parseInt(id, 10))
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...body }
      return { message: 'Delete', id: id }
    }
    return { message: 'Not Found' }
  }

  async delete(id: string) {
    const index = this.products.findIndex(item => item.id === parseInt(id, 10))
    if (index === -1) {
      return boom.notFound()
    }
    this.products.splice(index, 1)
    return { message: 'Delete', id: id }
  }
}

export default ProductService
