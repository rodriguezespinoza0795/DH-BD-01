import express from 'express'
const router = express.Router()
const categories = [
  {
    id: 1,
    name: 'tech',
  },
  {
    id: 2,
    name: 'groseries',
  },
]

router.get('/', (req, res) => {
  res.send(categories)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(categories.find(item => item.id === parseInt(id, 10)))
})

export default router
