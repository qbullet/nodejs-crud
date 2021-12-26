import express from 'express'
import cors from 'cors'
import requestInfo from './middlewares/request-info.middleware.js'
import humpsMiddleware from './middlewares/humps.middleware.js'

const AppMiddleware = express()

AppMiddleware.use(express.urlencoded({ extended: true}))
AppMiddleware.use(express.json())
AppMiddleware.use(cors())
AppMiddleware.use(requestInfo())
AppMiddleware.use(humpsMiddleware())

export default AppMiddleware
