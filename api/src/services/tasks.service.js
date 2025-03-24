import { tasksData } from "../data/tasksData.js";
import { ClientError } from "../utils/errors.js";
import { v4 as uuidv4 } from "uuid";

const getAllTaskService = async () => {
  const tasks = tasksData;
  if (tasks.length == 0) throw new ClientError("No hay tareas");
  return tasks;
};

const getTaskService = async (taskId) => {
    const task = tasksData.find(taskItem => taskItem.id == taskId);
    if(!task) throw new ClientError("La tarea no existe", 404);
    return task;
};

const createTaskService = async (task) => {
    const {title, description, completed} = task
    if(!title || !description || completed == undefined) throw new ClientError("Todos los campos deben ser completados", 400)
    const newTask = {id: uuidv4(), title, description, completed, createdAt: new Date()}
    tasksData.push(newTask)
    return newTask;
};

const updateTaskService = async (taskId, task) => {
    const foundTask = tasksData.find(taskItem => taskItem.id == taskId);
    if(!foundTask) throw new ClientError("La tarea no existe", 404);
    const {title, description, completed} = task
    if(!title || !description || completed == undefined) throw new ClientError("Todos los campos deben ser completados", 400)
    foundTask.title = title;
    foundTask.description = description;
    foundTask.completed = completed;
    return foundTask; 
};
const deleteTaskService = async (taskId) => {
    const foundTask = tasksData.find(taskItem => taskItem.id == taskId);
    if(!foundTask) throw new ClientError("La tarea no existe",404);
    tasksData.splice(foundTask, 1)
    return tasksData;
};

export {
  getAllTaskService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
