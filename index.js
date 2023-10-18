import express, { json } from 'express'
import userRoter from './routers/user.router.js'
import morgan from 'morgan'

const app = express()

app.use(json())
app.use(morgan('dev'))

app.use('/users', userRoter)

app.get('/healt', (req, res) => {
  res.json({ message: 'Api is on' })
})

const server = app.listen(0, () => {
  console.log(`Api creada en http://localhost:${server.address().port}`)
})
