import { response } from "../utils/response.js";
import {
  createTaskService,
  deleteTaskService,
  getAllTaskService,
  getTaskService,
  updateTaskService,
} from "../services/tasks.service.js";

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTaskService();
    return response(res, 200, tasks);
  } catch (error) {
    next(error);
  }
};
const getTask = async (req, res, next) => {
  const { taskId } = req.params;
  try {
    const task = await getTaskService(taskId);
    return response(res, 200, task);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const task = req.body;
  try {
    await createTaskService(task);
    return response(res, 200, `Tarea agregada correctamente`);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  const { taskId } = req.params;
  const task = req.body;
  try {
    await updateTaskService(taskId, task);
    return response(res, 200, `Tarea actualizada correctamente`);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  try {
    await deleteTaskService(taskId);
    return response(res, 200, `Tarea eliminada correctamente`);
  } catch (error) {
    next(error);
  }
};

export { getAllTasks, getTask, createTask, updateTask, deleteTask };
