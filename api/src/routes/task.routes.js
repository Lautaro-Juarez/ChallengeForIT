import {Router} from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/tasks", getAllTasks)
router.post("/tasks", createTask)
router.get("/tasks/:taskId", getTask)
router.put("/tasks/:taskId", updateTask)
router.delete("/tasks/:taskId", deleteTask) 

export default router;