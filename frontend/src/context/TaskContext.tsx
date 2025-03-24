import { createContext, useEffect, useState } from "react"
import { Task, CreateTask, UpdateTask, TaskResponse } from "../models/Task.model.tsx"
import { getTasksApi, createTaskApi, updateTaskApi, deleteTaskApi, getTaskByIdApi } from "../api/ApiTask.tsx"

interface TaskContextValue {
    tasks: TaskResponse,
    getTaskById: (taskId: string) => Promise<Task | undefined>;
    createTask: (task: CreateTask) => Promise<void>,
    deleteTask: (taskId: string) => Promise<void>,
    updateTask: (taskId: string, task: UpdateTask) => Promise<void>,
    searchTask: (title: string) => void,
    searched: TaskResponse,
}

export const TasksContext = createContext<TaskContextValue>({
    tasks: { error: false, data: [] },
    getTaskById: async () => undefined,
    createTask: async () => { },
    deleteTask: async () => { },
    updateTask: async () => { },
    searchTask: () => { },
    searched: { error: false, data: [] },
})

interface Props {
    children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({ children }) => {

    const [tasks, setTasks] = useState<TaskResponse>({ error: false, data: [] })
    const [loading, setLoading] = useState<boolean>(false)
    const [searched, setSearched] = useState<TaskResponse>({ error: false, data: [] })

    useEffect(() => {
        getTasks()
    }, [loading])

    const getTasks = async () => {
        try {
            const res = await getTasksApi();
            const data = await res.json();
            setTasks(data)
        } catch (error) {
            console.error("Error en getTaskById:", error);
        }

    }


    const getTaskById = async (taskId: string) => {
        try {
            const res = await getTaskByIdApi(taskId);
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Error al obtener la tarea");

            return data;
        } catch (error) {
            console.error("Error en getTaskById:", error);
            return undefined;
        }
    };

    const createTask = async (task: CreateTask) => {
        setLoading(true);
        try {
            const res = await createTaskApi({ ...task, completed: false });
            const data = await res.json();
            setTasks(prev => ({ error: false, data: [...(prev?.data || []), data] }));
            (false)
        } catch (error) {
            console.error("Error en createTask:", error);
        }
        setLoading(false);
    };


    const deleteTask = async (taskId: string) => {
        try {
            setLoading(true);
            const res = await deleteTaskApi(taskId);
            const data = await res.json();
            if (res.status !== 200) throw new Error("Error al eliminar la tarea");
            setTasks(prev => ({ error: false, data: [...(prev?.data || []), data] }));
            setLoading(false);
        }
        catch (error) {
            console.error("Error en deleteTask:", error);
        }
    };

    const updateTask = async (taskId: string, task: UpdateTask) => {
        setLoading(true);
        try {
            const res = await updateTaskApi(taskId, task);
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Error al actualizar la tarea");

            setTasks(prev => ({ error: false, data: [...(prev?.data || []), data] }));
            (false)
        } catch (error) {
            console.error("Error en updateTask:", error);
        }
        setLoading(false);
    };

    const searchTask = (title: string) => {
        const foundTask = tasks.data.filter((task: Task) => task.title.trim().toLowerCase().includes(title.trim().toLowerCase()))
        setSearched(foundTask.length > 0
            ? { error: false, data: foundTask }
            : { error: true, data: [] }
        );
    }

    return (
        <TasksContext.Provider value={{ tasks, getTaskById, createTask, deleteTask, updateTask, searchTask, searched}}>
            {children}
        </TasksContext.Provider>
    )

}

