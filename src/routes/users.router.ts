import express, { Request, Response } from 'express'
const router = express.Router()
import { UserService } from '../services'

const service = new UserService()

router.get(
  '/',
  async (
    req: Request<object, object, object, { offset: string; limit: string }>,
    res: Response,
  ) => {
    const { offset = '0', limit = '10' } = req.query
    const categories = await service.find(offset, limit)
    res.send(categories)
  },
)

// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const categories = await service.findOne(id)
//   res.send(categories)
// })

// router.post('/', async (req, res) => {
//   const body = req.body
//   const categories = await service.create(body)
//   res.send(categories)
// })

// router.patch('/:id', async (req, res) => {
//   const body = req.body
//   const { id } = req.params
//   const categories = await service.update(id, body)
//   res.send(categories)
// })

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params
//   const categories = await service.delete(id)
//   res.send(categories)
// })

export default router
