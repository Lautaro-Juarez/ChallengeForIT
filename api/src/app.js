import express from 'express'
import taskRoutes from './routes/task.routes.js'
import { envs } from './utils/envs.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(express.json())

app.use("/api" , taskRoutes)

app.use(errorHandler)

app.listen(envs.PORT, () => {console.log(`Server running on port ${envs.PORT}`)});
