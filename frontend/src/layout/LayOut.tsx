import { TasksProvider } from "../context/TaskContext.tsx"
import { TaskList } from "./TaskList/TaskList.tsx"

export const LayOut = () => {
    return (
        <div>
            <h1>LayOut</h1>
            <TasksProvider>
                <TaskList />
            </TasksProvider>
        </div>
    )
}


