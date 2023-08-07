import express, { Request, Response } from 'express'
const router = express.Router()
import { ProductService } from '../services'
import { validatorHandler } from '../middlewares'
import { createProductSchema, getProductSchema } from '../schemas'

const service = new ProductService()

router.get(
  '/',
  async (
    req: Request<object, object, object, { offset: number; limit: number }>,
    res: Response,
  ) => {
    const { offset = 0, limit = 10 } = req.query
    const products = await service.find(offset, limit)
    res.send(products)
  },
)

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
    const { id } = req.params
    const products = await service.findOne(id)
    res.send(products)
  },
)

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const product = await service.create(body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  },
)

router.patch('/:id', async (req, res) => {
  const body = req.body
  const { id } = req.params
  const products = await service.update(id, body)
  res.send(products)
})

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const products = await service.delete(id)
      res.send(products)
    } catch (error) {
      next(error)
    }
  },
)

export default router
