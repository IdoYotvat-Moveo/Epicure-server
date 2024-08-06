import * as http from 'http'
import * as path from 'path'
import cors from 'cors'
import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import apiRouter from './api/v1'


const app = express()
const server = http.createServer(app)

app.use(cookieParser())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('public')))
} else {
  const corsOptions: cors.CorsOptions = {
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'http://localhost:5173',
      'http://127.0.0.1:5174',
      'http://localhost:5174',
    ],
    credentials: true,
  }
  app.use(cors(corsOptions))
}
// app.get('/**', (req: Request, res: Response) => {
//   res.sendFile(path.resolve('public/index.html'))
// })

app.use('/api',apiRouter)

const port = process.env.PORT || 3030
mongoose.connect('mongodb://localhost:27017/Epicure').then(() => {
  console.log('db connected')
  server.listen(port, () => {
    console.log('Server is running on port: ' + port)
  })
}).catch(error=>{console.log('had issues connecting to db',error)})


