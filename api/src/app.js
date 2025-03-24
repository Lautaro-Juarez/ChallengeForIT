import express from 'express'
import taskRoutes from './routes/task.routes.js'
import { envs } from './utils/envs.js'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler.js'
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,DELETE", 
    allowedHeaders: "Content-Type,Authorization"
  }));

app.use("/api" , taskRoutes)

app.use(errorHandler)

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(swaggerSpec))
);


app.listen(envs.PORT, () => {console.log(`Server running on port ${envs.PORT}`)});
