import express, { Express } from 'express'
import categoriesRouter from './categories.router'
import productsRouter from './products.router'
import usersRouter from './users.router'

const routerApi = (app: Express) => {
  const router = express.Router()
  app.use('/', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
}

export default routerApi
