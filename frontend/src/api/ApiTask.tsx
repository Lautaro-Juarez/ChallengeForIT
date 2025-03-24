import { CreateTask, UpdateTask } from "../models/Task.model.tsx";

const API = import.meta.env.VITE_API

const createTaskApi = async (task: CreateTask) => {
    return fetch(`${API}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const getTasksApi = async () => {
    return fetch(`${API}/tasks`);
};

const getTaskByIdApi = async (taskId: string) => {
    return fetch(`${API}/tasks/${taskId}`)
}

const updateTaskApi = async (taskId: string, task: UpdateTask) =>
    fetch(`${API}/tasks/${taskId}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    });

const deleteTaskApi = async (taskId: string) => {
    return fetch(`${API}/tasks/${taskId}`, {
        method: "DELETE",
    });
};

export {
    getTaskByIdApi, getTasksApi, createTaskApi, updateTaskApi, deleteTaskApi
}