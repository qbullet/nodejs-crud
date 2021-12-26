import express from 'express'
import AppRouter from './src/app.route.js'
import AppMiddleware from './src/app.middleware.js'
import AppConfig from './src/app.config.js'

const app = express()

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      timestamp: new Date()
    }
  })
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
