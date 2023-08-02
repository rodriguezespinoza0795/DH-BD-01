import express, { Request, Response } from 'express'
const router = express.Router()
const products = [
  {
    id: 1,
    name: 'producto1',
    price: 1000,
  },
  {
    id: 2,
    name: 'producto2',
    prices: 2000,
  },
  {
    id: 3,
    name: 'producto3',
    price: 1000,
  },
  {
    id: 4,
    name: 'producto4',
    prices: 2000,
  },
]

router.get(
  '/',
  async (
    req: Request<object, object, object, { offset: number; limit: number }>,
    res: Response,
  ) => {
    const { offset, limit } = req.query
    const start = offset
    const end = offset == 0 ? limit : offset * limit + 1
    offset && limit
      ? res.send(products.slice(start, end))
      : res.send({
          status: 'error',
          message: 'limit and offset are mandatory',
        })
  },
)

router.get('/:id', async (req, res) => {
  const { id } = req.params
  res.send(products.find(item => item.id === parseInt(id, 10)))
})

router.post('/', (req, res) => {
  const body = req.body
  const id = products.length + 1
  products.push({ ...body, id: id })
  res.send(products.find(item => item.id === id, 10))
})

router.patch('/:id', (req, res) => {
  const body = req.body
  const { id } = req.params
  res.send({
    message: 'Update',
    data: body,
    id: id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.send({
    message: 'Delete',
    id: id,
  })
})

export default router
