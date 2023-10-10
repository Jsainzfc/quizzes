import express from 'express'
import http from 'http'
import { config } from './config/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = http.createServer(app)
server.listen(config.PORT, () => {
  console.log(`Express Server listening at http://localhost:${config.PORT}`)
})
