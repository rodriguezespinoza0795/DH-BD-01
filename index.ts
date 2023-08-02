import express, { Express, Request, Response } from 'express'
import routerApi from './routes'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
app.use(express.json())
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

routerApi(app)

app.listen(port, () => {
  console.log(`⚡️[server]: http://localhost:${port}`)
})
