import express, { json, Router } from 'express'
import userRouter from './routers/user.router.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRouter from './routers/auth.router.js'

const app = express()
app.disable('x-powered-by')

app.use(json())
app.use(cookieParser())
app.use(morgan('dev'))

const apiV1Router = Router()
app.use('/api/v1', apiV1Router)

apiV1Router.use('/users', userRouter)
apiV1Router.use('/auth', authRouter)

apiV1Router.get('/healt', (req, res) => {
  res.json({ message: 'Api is on' })
})

const PORT = process.env.PORT || 0

const server = app.listen(PORT, () => {
  console.log(`Api creada en http://localhost:${server.address().port}`)
})
