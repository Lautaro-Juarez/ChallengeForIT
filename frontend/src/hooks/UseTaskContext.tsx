import { useContext } from "react";
import { TasksContext } from "../context/TaskContext.tsx";

export const useTaskContext = () => {
    const context = useContext(TasksContext)
    if (!context) throw new Error('useTasks must be used within a TaskProvider')
    return context;
}