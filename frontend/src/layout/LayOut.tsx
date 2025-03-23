import { FaPlus, FaSearch } from "react-icons/fa"
import { TasksProvider } from "../context/TaskContext.tsx"
import { TaskList } from "./TaskList/TaskList.tsx"
import styles from './layout.module.css'
import { useState } from "react"
import { TaskForm } from "./TaskForm/TaskForm.tsx"

export const LayOut = () => {

    const [createPop, setCreatePop] = useState<boolean>(false)

    return (
        <div className={`${styles.layout_container} flex_center`}>
            <h1 className={styles.title}>Task List</h1>
            <h4>¿Querés encontra una tarea? <FaSearch /></h4>
            <TasksProvider>
                <TaskList />
                <div className={styles.divition_bar}>
                    <div className={`${styles.line} flex_center`}>
                        <small className={styles.legend}>
                            otras tareas
                        </small>
                    </div>
                </div>
                <small className={`${styles.add_task} flex_center`} >
                    <FaPlus onClick={() => setCreatePop(true)} />
                </small>
                {createPop && <TaskForm closePop={setCreatePop}/>}
            </TasksProvider>
        </div>
    )
}


