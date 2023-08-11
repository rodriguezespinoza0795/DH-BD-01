import express, { Express, Request, Response } from 'express'
import routerApi from './routes'
import cors from 'cors'
import { boomErrorHandler, errorHandler } from './middlewares'

const app: Express = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

routerApi(app)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`⚡️[server]: http://localhost:${port}`)
})
