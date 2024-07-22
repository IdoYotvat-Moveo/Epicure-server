import { Router } from "express";
import v1Router from "./routes/api.routes";


const apiRouter = Router()

apiRouter.use('/v1',v1Router)

export default apiRouter