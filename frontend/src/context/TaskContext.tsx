import { createContext, useEffect, useState } from "react"
import { Task, CreateTask, UpdateTask } from "../models/Task.model.tsx"
import { getTasksApi, createTaskApi, updateTaskApi, deleteTaskApi, getTaskByIdApi } from "../api/ApiTask.tsx"

interface TaskContextValue {
    tasks: Task[],
    getTaskById: (taskId: string) => Promise<Task | undefined>;
    createTask: (task: Task) => Promise<void>,
    deleteTask: (taskId: string) => Promise<void>,
    updateTask: (taskId: string, task: UpdateTask) => Promise<void>
}

export const TasksContext = createContext<TaskContextValue>({
    tasks: [],
    getTaskById: async () => undefined,
    createTask: async () => { },
    deleteTask: async () => { },
    updateTask: async () => { }
})

interface Props {
    children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getTasksApi()
            .then(res => res.json())
            .then(data => setTasks(data.data))
    }, [loading])

    const getTaskById = async (taskId: string) => {
        const res = await getTaskByIdApi(taskId)
        const data = await res.json()
        return data
    }

    const createTask = async (task: CreateTask) => {
        setLoading(true)
        console.log(task);
        const res = await createTaskApi({...task, completed: false})
        const data = await res.json()
        setTasks([...tasks, data])
        setLoading(false)
    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskApi(id)
        if (res.status === 204) {
            setTasks(tasks.filter(task => task.id !== id))
        }

    }

    const updateTask = async (id: string, task: UpdateTask) => {
        setLoading(true)
        const res = await updateTaskApi(id, task)
        const data = await res.json()
        setTasks(
            tasks.map(task => (task.id === id ? { ...task, ...data } : task))
        )
        setLoading(false)
    }

    return (
        <TasksContext.Provider value={{ tasks, getTaskById, createTask, deleteTask, updateTask }}>
            {children}
        </TasksContext.Provider>
    )

}

